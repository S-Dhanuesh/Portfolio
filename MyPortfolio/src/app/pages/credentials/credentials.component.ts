import { Component } from '@angular/core';

@Component({
  selector: 'app-credentials',
  standalone: false,
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent {
  education = [
    {
      degree: 'B.E. Computer Science and Engineering',
      institution: 'Sri Ramakrishna Engineering College',
      year: '2021 – 2025',
      grade: 'CGPA: 7.2'
    },
    {
      degree: 'Higher Secondary Schooling',
      institution: 'Venkatalakshmi Matric Hr Sec School',
      year: '2020 – 2021',
      grade: 'Percentage: 86.16%'
    },
    {
      degree: 'SSLC',
      institution: 'Venkatalakshmi Matric Hr Sec School',
      year: '2018 – 2019',
      grade: 'Percentage: 84.6%'
    }
  ];

  certifications = [
    {
      title: 'Full–Stack Development Training',
      provider: 'Matrimony.com',
      year: '2025'
    },
    {
      title: 'Web Development Bootcamp',
      provider: 'Udemy',
      year: '2023'
    },
    {
      title: 'Business English Preliminary Certification',
      provider: 'Cambridge Assessment English',
      year: '2022'
    }
  ];
}
