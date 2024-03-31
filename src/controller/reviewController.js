const axios = require('axios');
const { Review, Major, University, User } = require('../models');
const { badWords } = require('vn-badwords');
require('dotenv').config()
const badWordsList = require('../../uploads/badWordsList.json').badWords;

const { google } = require('googleapis');

const API_KEY = process.env.API_KEY_GOOGLE_SEARCH // Thay thế bằng API key thực tế của bạn
const DISCOVERY_URL = 'https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1';

// Hàm kiểm tra từ ngữ không phù hợp sử dụng Perspective API
async function checkForInappropriateLanguage(content) {
    return new Promise((resolve, reject) => {
        google.discoverAPI(DISCOVERY_URL)
            .then(client => {
                const analyzeRequest = {
                    comment: { text: content },
                    languages: ["en"], // Thêm hoặc thay đổi ngôn ngữ nếu cần
                    requestedAttributes: { TOXICITY: {} }
                };

                client.comments.analyze({
                    key: API_KEY,
                    resource: analyzeRequest,
                }, (err, response) => {
                    if (err) {
                        console.error('Error calling Perspective API:', err);
                        return reject(err);
                    }

                    const toxicityScore = response.data.attributeScores.TOXICITY.summaryScore.value;
                    console.log(`Toxicity score: ${toxicityScore}`);
                    resolve(toxicityScore > 0.8); // Điều chỉnh ngưỡng theo yêu cầu
                });
            })
            .catch(err => {
                console.error('Error discovering Perspective API:', err);
                reject(err);
            });
    });
}
function containsBadWords(content) {
    const contentLowerCase = content.toLowerCase();
    return badWordsList.some(badWord => contentLowerCase.includes(badWord.toLowerCase()));
}
const createReview = async (req, res) => {
    const { id } = req.user;
    const { major_id, content, parent_review_id } = req.body;

    // Validate input
    if (!id || !major_id || !content) {
        return res.status(400).send({ message: 'Missing required fields' });
    }
    const isInappropriate = containsBadWords(content);

    if (isInappropriate) {
        return res.status(400).send({ message: 'Nội dung không phù hợp.' });
    }

    try {
        const newComment = await Review.create({
            user_id: id,
            major_id,
            content,
            parent_review_id,
        });

        return res.status(201).send(newComment);
    } catch (error) {
        return res.status(500).send({ message: 'Error adding comment', error: error.message });
    }
}

const getReviewByUniCode = async (req, res) => {
    try {
        // Tìm university_id dựa trên uni_code
        const university = await University.findOne({
            where: { uni_code: req.params.uni_code },
        });

        if (!university) {
            return res.status(404).json({ message: 'Trường đại học không tồn tại.' });
        }

        const reviews = await Review.findAll({
            include: [
                {
                    model: Major,
                    where: { uni_id: university.uni_id },
                    attributes: ['major_name'],
                    include: [
                        {
                            model: University,
                        }
                    ]
                },
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        // Định dạng lại dữ liệu trước khi gửi phản hồi
        const formattedReviews = reviews.map(review => ({
            review_id: review.review_id,
            content: review.content,
            major_id: review.major_id,
            majorName: review.Major.major_name,
            username: review.User.username,
            parent_review_id: review.parent_review_id,
            createdAt: review.createdAt
        }));
        res.json(formattedReviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createReview,
    getReviewByUniCode
}