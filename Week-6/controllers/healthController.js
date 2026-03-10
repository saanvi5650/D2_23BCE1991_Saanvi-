const HealthReport = require("../models/HealthReport");

let reports = []; // temporary storage
let alerts = [];

// Risk calculation
const calculateRisk = (temperature, cough, bp) => {
    let score = 0;

    if (temperature > 38) score += 2;
    if (cough === true) score += 1;
    if (bp > 140) score += 2;

    if (score >= 4) return "High";
    if (score >= 2) return "Medium";
    return "Low";
};

// Submit health report
exports.submitHealth = (req, res) => {
    const { name, age, temperature, cough, bp, symptoms } = req.body;

    const report = new HealthReport(
        name,
        age,
        temperature,
        cough,
        bp,
        symptoms
    );

    report.riskLevel = calculateRisk(temperature, cough, bp);

    reports.push(report);
    if (report.riskLevel === "High") {
    const alert = {
        patient: report.name,
        risk: report.riskLevel,
        time: new Date(),
        message: "High risk patient detected"
    };

    alerts.push(alert);
}

    res.json({
        message: "Health report submitted successfully",
        riskLevel: report.riskLevel,
        data: report
    });
};

// Get all reports
exports.getReports = (req, res) => {
    res.json(reports);
};

exports.getAlerts = (req, res) => {
    res.json(alerts);
};