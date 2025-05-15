import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone:false,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name = 'Dhanuesh S';
  title = 'Software Developer | Full-Stack & ML Enthusiast';

  photoPath = 'image.png';  // Adjust path as needed

  summaryPoints: string[] = [
    'Passionate software engineer with a strong foundation in computer science and hands-on experience with Angular and Node.js.',
    'Skilled in developing scalable, user-friendly web applications with clean and maintainable code.',
    'Proficient in full-stack development, including frontend frameworks, backend APIs, and database management.',
    'Committed to continuous learning and applying modern technologies to solve real-world problems.',
    'Strong problem-solving abilities, teamwork skills, and attention to detail.'
  ];

  skills = [
    { category: 'Programming Languages', details: 'C, Java, Python' },
    { category: 'Web Development', details: 'HTML, CSS, JavaScript, TypeScript, Angular, Node.js, Express.js' },
    { category: 'Database', details: 'MySQL' },
    { category: 'Machine Learning', details: 'XGBoost, SVC, CNN, GRU, LSTM' },
    { category: 'Tools & Platforms', details: 'VS Code, Git, MySQL Workbench' },
    { category: 'Languages (RWS)', details: 'Tamil, English, Hindi' }
  ];
}
