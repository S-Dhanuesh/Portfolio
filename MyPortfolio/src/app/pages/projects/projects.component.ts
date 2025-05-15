// projects.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Personal Finance Manager (April-2025)',
      description: [
        'Developed a full-stack web application using Angular and Node.js.',
        'Tracked expenses and set category-wise monthly budgets.',
        'Integrated Chart.js for spending and budget analysis.',
        'Added savings goal tracker and role-based user access.',
        'Implemented CSV/PDF export and lazy-loaded Angular modules.'
      ],
      github: 'https://github.com/S-Dhanuesh/Personal-Finance-Manager'
    },
    {
      title: 'Estimation of Remaining Useful Lifetime (RUL) (2024-2025)',
      description: [
        'Created a predictive maintenance system using deep learning.',
        'Used GRU and LSTM models to estimate machinery lifespan.',
        'Achieved 85% accuracy on time-series data.',
        'Enabled early detection of potential equipment failures.',
        'Improved maintenance scheduling and reduced downtime risks.'
      ],
      github: 'https://drive.google.com/drive/folders/1rBrUvx0te2jSnnMDMgj72fL5elaE60ia'
    },
    {
      title: 'Machine Monitoring System Using ML (2023-2024)',
      description: [
        'Built a web-based interface for hydraulic machine monitoring.',
        'Used XGBoost, SVC, and CNN to detect failures and analyze oil purity.',
        'Achieved 90% accuracy in fault detection.',
        'Reduced machine downtime by 15% through automated alerts.',
        'Developed with Python and integrated real-time diagnostics.'
      ],
      github: 'https://drive.google.com/drive/folders/1rBrUvx0te2jSnnMDMgj72fL5elaE60ia'
    }
  ];
}
