const { UniversityScore } = require('../models');
const { Sequelize } = require('sequelize');

const getMajorsByUniversityCode = async (req, res) => {
    const { uniCode } = req.params;

    try {
        const majors = await UniversityScore.sequelize.query(`
            SELECT DISTINCT ON (major_code) *
            FROM UniversityScores
            WHERE uni_code = :uniCode
            ORDER BY major_code, year DESC
        `, {
            replacements: { uniCode },
            model: UniversityScore,
            mapToModel: true // Makes the results formatted as if they were created with UniversityScore.findAll()
        });

        res.json(majors);
    } catch (error) {
        console.error("Error fetching majors by university code:", error);
        res.status(500).json({ message: "Failed to fetch majors by university code", error: error.message });
    }
};


const getAllUniversityNames = async (req, res) => {
    try {
        const universities = await UniversityScore.findAll({
            attributes: ['uni_code', 'uni_name'], // Chỉ lấy các trường uni_code và uni_name
            group: ['uni_code', 'uni_name'], // Nhóm kết quả theo uni_code và uni_name
            raw: true // Trả về kết quả dưới dạng JSON thô, không có đối tượng Sequelize
        });
        res.status(200).json(universities);
    } catch (error) {
        console.error("Error fetching all university names:", error);
        res.status(500).json({ message: "Failed to fetch all university names", error: error.message });
    }
};

const getScoresByMajorCodeAndUniversityCode = async (req, res) => {
    const { majorCode, uniCode } = req.params;
    try {
        const scores = await UniversityScore.findAll({
            attributes: ['uni_code', 'uni_name', 'major_code', 'major_name', 'subject_group', 'admission_score', 'year'],
            where: {
                uni_code: uniCode,
                major_code: majorCode,
            },
            order: ['year'],
            distinct: true
        });

        // Nhóm kết quả theo năm
        const groupedScores = scores.reduce((result, score) => {
            if (!result[score.year]) {
                result[score.year] = [];
            }
            result[score.year].push(score);
            return result;
        }, {});

        res.status(200).json(groupedScores);
    } catch (error) {
        console.error("Error fetching scores by major code and university code:", error);
        res.status(500).json({ message: "Failed to fetch scores by major code and university code", error: error.message });
    }
};

module.exports = {
    getMajorsByUniversityCode,
    getAllUniversityNames,
    getScoresByMajorCodeAndUniversityCode
};
