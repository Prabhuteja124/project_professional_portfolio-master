import React from 'react';
import { motion } from 'framer-motion';
import { jsPDF } from 'jspdf';
import { Document, Paragraph, TextRun, HeadingLevel, Packer, AlignmentType } from 'docx';
import { AppWrap, MotionWrap } from '../../wrapper';
import './ResumeDownload.scss';

const ResumeDownload = () => {
  const resumeData = {
    name: 'Prabhu Teja Rompalli',
    location: 'Hyderabad, India',
    email: 'prabhuteja124@gmail.com',
    phone: '+91 8143388437',
    linkedin: 'linkedin.com/in/prabhu-teja-29a484338',
    github: 'github.com/Prabhuteja124',
    title: 'Data Scientist & AI Engineer',
    summary: 'Entry-level Data Scientist with practical experience in machine learning, time-series forecasting, and Generative AI through consulting engagements and hands-on projects. Proficient in Python, Scikit-learn, TensorFlow, and PyTorch, with a focus on building end-to-end ML pipelines and RAG architectures. Demonstrated ability to deliver measurable results, including a 15-20% reduction in inventory inefficiencies and trading signal analysis achieving a 67% win rate.',
    experience: [
      {
        role: 'Data Science Intern',
        company: 'Nufintech (Remote / US Client)',
        duration: 'Dec 2024 - Jan 2025',
        achievements: [
          'Conducted causal pattern analysis for Renko trade outcomes, achieving 67% win rate (vs 41% baseline)',
          'Engineered sliding-window features with tsfresh and stumpy for time-series pattern mapping',
          'Delivered automated Excel reports with 26% win-rate lift for high-confidence signals'
        ]
      },
      {
        role: 'Data Science AI Consultant',
        company: 'Rubixe AI Solutions, Bangalore',
        duration: 'Oct 2024 - Jun 2025',
        achievements: [
          'Developed forecasting models (Prophet, ARIMA, LSTM) reducing stockouts by 15% and excess inventory by 20%',
          'Built Power BI dashboards and automated retraining pipelines using Scikit-learn',
          'Implemented Python + Power Automate alerts improving inventory efficiency by 20%'
        ]
      },
      {
        role: 'Machine Learning Intern',
        company: 'VXL IT Solutions, Vijayawada',
        duration: 'May 2023 - Jun 2023',
        achievements: [
          'Built ML models using Scikit-learn with 18% accuracy improvement',
          'Performed EDA on datasets with 100K+ records',
          'Applied cross-validation and hyperparameter tuning to speed model iterations by 25%'
        ]
      },
      {
        role: 'Python Programming Intern',
        company: 'Trylogic Soft Solutions, Hyderabad',
        duration: 'Aug 2022 - Sep 2022',
        achievements: [
          'Automated data processing tasks reducing execution time by 30%',
          'Developed cleaning tools for 50+ datasets',
          'Applied Python OOP and data structures to improve script development speed'
        ]
      }
    ],
    skills: {
      Programming: 'Python, SQL, Git, GitHub, Jupyter, VS Code, Google Colab',
      'ML & AI': 'Scikit-learn, TensorFlow, PyTorch, LangChain, LangGraph, RAG, LLMs',
      'Data Processing': 'Pandas, NumPy, OpenCV, Feature Engineering, EDA',
      Visualization: 'Power BI, Tableau, Plotly, Matplotlib, Seaborn',
      MLOps: 'Docker, FastAPI, Model Deployment, API Development'
    },
    certifications: [
      'AI Expert & Certified Data Scientist - IABAC, 2025',
      'Oracle Fusion AI Agent Studio Certified - Oracle, 2025',
      'OCI 2025 Certified AI Foundations Associate - Oracle, 2025',
      'Data Visualisation Virtual Experience - Tata, 2025',
      'Data Science Certification - NASSCOM FutureSkills Prime, 2025',
      'Data Science Program - DataMites/Skillogic, 2025',
      'ML & Deep Learning Bootcamp - Udemy, 2023'
    ],
    education: [
      {
        school: 'Jawaharlal Nehru Technological University, Kakinada',
        degree: 'B.Tech in Electrical & Electronics Engineering',
        duration: '2021-2024',
        details: 'CGPA: 7.29/10'
      },
      {
        school: 'A.A.N.M. & V.V.R.S.R. Polytechnic, Gudlavalleru',
        degree: 'Diploma in Electrical & Electronics Engineering',
        duration: '2018-2021',
        details: 'Percentage: 66%'
      }
    ]
  };

  const generatePDF = () => {
    // eslint-disable-next-line new-cap
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - (margin * 2);
    let y = margin;
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text(resumeData.name, pageWidth / 2, y, { align: 'center' });
    y += 8;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`${resumeData.location} | ${resumeData.email} | ${resumeData.phone}`, pageWidth / 2, y, { align: 'center' });
    y += 5;
    doc.text(`${resumeData.linkedin} | ${resumeData.github}`, pageWidth / 2, y, { align: 'center' });
    y += 10;
    doc.line(margin, y, pageWidth - margin, y);
    y += 8;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('PROFESSIONAL SUMMARY', margin, y);
    y += 6;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const splitSummary = doc.splitTextToSize(resumeData.summary, contentWidth);
    doc.text(splitSummary, margin, y);
    y += splitSummary.length * 5 + 8;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('EXPERIENCE', margin, y);
    y += 6;
    resumeData.experience.forEach((exp) => {
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(exp.role, margin, y);
      y += 5;
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.text(`${exp.company} | ${exp.duration}`, margin, y);
      y += 5;
      doc.setFont('helvetica', 'normal');
      exp.achievements.forEach((achievement) => {
        const splitAchievement = doc.splitTextToSize(`• ${achievement}`, contentWidth - 5);
        doc.text(splitAchievement, margin + 3, y);
        y += splitAchievement.length * 4 + 2;
      });
      y += 3;
    });
    y += 5;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('TECHNICAL SKILLS', margin, y);
    y += 6;
    doc.setFontSize(9);
    Object.entries(resumeData.skills).forEach(([category, skills]) => {
      if (y > doc.internal.pageSize.getHeight() - 20) {
        doc.addPage();
        y = margin;
      }
      doc.setFont('helvetica', 'bold');
      doc.text(`${category}:`, margin, y);
      doc.setFont('helvetica', 'normal');
      const splitSkills = doc.splitTextToSize(skills, contentWidth - 40);
      doc.text(splitSkills, margin + 35, y);
      y += splitSkills.length * 4 + 3;
    });
    y += 5;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('CERTIFICATIONS', margin, y);
    y += 6;
    doc.setFontSize(9);
    resumeData.certifications.forEach((cert) => {
      if (y > doc.internal.pageSize.getHeight() - 20) {
        doc.addPage();
        y = margin;
      }
      const splitCert = doc.splitTextToSize(`• ${cert}`, contentWidth - 5);
      doc.text(splitCert, margin + 3, y);
      y += splitCert.length * 4 + 2;
    });
    y += 5;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('EDUCATION', margin, y);
    y += 6;
    resumeData.education.forEach((edu) => {
      if (y > doc.internal.pageSize.getHeight() - 30) {
        doc.addPage();
        y = margin;
      }
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(edu.degree, margin, y);
      y += 5;
      doc.setFont('helvetica', 'italic');
      doc.text(`${edu.school} | ${edu.duration}`, margin, y);
      y += 5;
      doc.setFont('helvetica', 'normal');
      doc.text(edu.details, margin, y);
      y += 8;
    });
    doc.save('Prabhu_Teja_Resume.pdf');
  };

  const generateDOCX = async () => {
    const doc = new Document({
      sections: [{
        properties: {
          page: {
            margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
          },
        },
        children: [
          new Paragraph({
            text: resumeData.name,
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({
            text: `${resumeData.location} | ${resumeData.email} | ${resumeData.phone}`,
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({
            text: `${resumeData.linkedin} | ${resumeData.github}`,
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({ text: '' }),
          new Paragraph({
            text: 'PROFESSIONAL SUMMARY',
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({ text: resumeData.summary }),
          new Paragraph({ text: '' }),
          new Paragraph({
            text: 'EXPERIENCE',
            heading: HeadingLevel.HEADING_1,
          }),
          ...resumeData.experience.flatMap((exp) => [
            new Paragraph({
              children: [new TextRun({ text: exp.role, bold: true })],
            }),
            new Paragraph({
              children: [new TextRun({ text: `${exp.company} | ${exp.duration}`, italics: true })],
            }),
            ...exp.achievements.map((achievement) => new Paragraph({
              text: `• ${achievement}`,
              bullet: { level: 0 },
            })),
            new Paragraph({ text: '' }),
          ]),
          new Paragraph({
            text: 'TECHNICAL SKILLS',
            heading: HeadingLevel.HEADING_1,
          }),
          ...Object.entries(resumeData.skills).map(([category, skills]) => new Paragraph({
            children: [
              new TextRun({ text: `${category}: `, bold: true }),
              new TextRun({ text: skills }),
            ],
          })),
          new Paragraph({ text: '' }),
          new Paragraph({
            text: 'CERTIFICATIONS',
            heading: HeadingLevel.HEADING_1,
          }),
          ...resumeData.certifications.map((cert) => new Paragraph({
            text: `• ${cert}`,
            bullet: { level: 0 },
          })),
          new Paragraph({ text: '' }),
          new Paragraph({
            text: 'EDUCATION',
            heading: HeadingLevel.HEADING_1,
          }),
          ...resumeData.education.flatMap((edu) => [
            new Paragraph({
              children: [new TextRun({ text: edu.degree, bold: true })],
            }),
            new Paragraph({
              children: [new TextRun({ text: `${edu.school} | ${edu.duration}`, italics: true })],
            }),
            new Paragraph({ text: edu.details }),
            new Paragraph({ text: '' }),
          ]),
        ],
      }],
    });

    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Prabhu_Teja_Resume.docx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownload = (format) => {
    if (format === 'PDF') {
      generatePDF();
    } else if (format === 'DOCX') {
      generateDOCX();
    }
  };

  const resumeOptions = [
    {
      format: 'PDF',
      icon: '📄',
      description: 'Standard format for job applications',
      color: '#dc2626'
    },
    {
      format: 'DOCX',
      icon: '📝',
      description: 'Editable Word document',
      color: '#2563eb'
    }
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="resume-header"
      >
        <h2 className="head-text">
          Download <span>Resume</span>
        </h2>
        <p className="p-text resume-subtitle">
          Choose your preferred format to download my resume
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="resume-card"
      >
        <div className="resume-preview">
          <div className="preview-icon">📄</div>
          <div className="preview-info">
            <h3>Prabhu Teja Rompalli</h3>
            <p className="p-text">Data Scientist & AI Engineer</p>
            <span className="file-size">2.4 MB • Updated Feb 2025</span>
          </div>
        </div>

        <div className="format-options">
          {resumeOptions.map((option, index) => (
            <motion.div
              key={option.format}
              className="format-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -3, boxShadow: `0 10px 30px ${option.color}15` }}
            >
              <div
                className="format-icon"
                style={{ backgroundColor: `${option.color}15` }}
              >
                <span>{option.icon}</span>
              </div>
              <div className="format-details">
                <h4>{option.format}</h4>
                <p className="p-text">{option.description}</p>
              </div>
              <motion.button
                type="button"
                className="download-btn"
                onClick={() => handleDownload(option.format)}
                style={{ backgroundColor: option.color }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download
              </motion.button>
            </motion.div>
          ))}
        </div>

        <div className="resume-note">
          <p className="p-text">
            💼 <strong>Looking for opportunities!</strong> I&apos;m currently open to Data Science,
            ML Engineering, and AI Development roles. Let&apos;s connect and discuss how I can
            contribute to your team.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(ResumeDownload, 'app__resume'),
  'resume',
  'app__primarybg'
);
