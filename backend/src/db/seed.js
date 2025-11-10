import pool from './connection.js';

const sampleCompanies = [
  {
    name: 'TechCorp Solutions',
    industry: 'Technology',
    location: 'San Francisco, CA',
    size: '100-500',
    founded_year: 2015,
    website: 'https://techcorp.example.com',
    description: 'Leading provider of enterprise software solutions'
  },
  {
    name: 'GreenEnergy Inc',
    industry: 'Energy',
    location: 'Austin, TX',
    size: '50-100',
    founded_year: 2018,
    website: 'https://greenenergy.example.com',
    description: 'Sustainable energy solutions for the future'
  },
  {
    name: 'MediCare Systems',
    industry: 'Healthcare',
    location: 'Boston, MA',
    size: '500-1000',
    founded_year: 2010,
    website: 'https://medicare.example.com',
    description: 'Advanced healthcare management systems'
  },
  {
    name: 'FinanceFlow',
    industry: 'Finance',
    location: 'New York, NY',
    size: '100-500',
    founded_year: 2017,
    website: 'https://financeflow.example.com',
    description: 'Modern financial services platform'
  },
  {
    name: 'EduTech Innovations',
    industry: 'Education',
    location: 'Seattle, WA',
    size: '50-100',
    founded_year: 2019,
    website: 'https://edutech.example.com',
    description: 'Revolutionary educational technology solutions'
  },
  {
    name: 'RetailMax',
    industry: 'Retail',
    location: 'Chicago, IL',
    size: '1000+',
    founded_year: 2005,
    website: 'https://retailmax.example.com',
    description: 'Large-scale retail operations and e-commerce'
  },
  {
    name: 'CloudSync Technologies',
    industry: 'Technology',
    location: 'San Francisco, CA',
    size: '500-1000',
    founded_year: 2012,
    website: 'https://cloudsync.example.com',
    description: 'Cloud infrastructure and data synchronization services'
  },
  {
    name: 'BioPharm Research',
    industry: 'Healthcare',
    location: 'Boston, MA',
    size: '100-500',
    founded_year: 2014,
    website: 'https://biopharm.example.com',
    description: 'Biotechnology and pharmaceutical research'
  },
  {
    name: 'AutoDrive Systems',
    industry: 'Automotive',
    location: 'Detroit, MI',
    size: '500-1000',
    founded_year: 2016,
    website: 'https://autodrive.example.com',
    description: 'Autonomous vehicle technology development'
  },
  {
    name: 'FoodChain Logistics',
    industry: 'Logistics',
    location: 'Dallas, TX',
    size: '100-500',
    founded_year: 2013,
    website: 'https://foodchain.example.com',
    description: 'Supply chain management for food industry'
  },
  {
    name: 'RealEstate Pro',
    industry: 'Real Estate',
    location: 'Los Angeles, CA',
    size: '50-100',
    founded_year: 2018,
    website: 'https://realestatepro.example.com',
    description: 'Property management and real estate services'
  },
  {
    name: 'MediaStream',
    industry: 'Media',
    location: 'New York, NY',
    size: '100-500',
    founded_year: 2015,
    website: 'https://mediastream.example.com',
    description: 'Digital media streaming and content distribution'
  },
  {
    name: 'SecureNet',
    industry: 'Technology',
    location: 'San Jose, CA',
    size: '100-500',
    founded_year: 2017,
    website: 'https://securenet.example.com',
    description: 'Cybersecurity solutions and network protection'
  },
  {
    name: 'AgriTech Solutions',
    industry: 'Agriculture',
    location: 'Denver, CO',
    size: '50-100',
    founded_year: 2019,
    website: 'https://agritech.example.com',
    description: 'Agricultural technology and farming innovations'
  },
  {
    name: 'TravelHub',
    industry: 'Travel',
    location: 'Miami, FL',
    size: '100-500',
    founded_year: 2016,
    website: 'https://travelhub.example.com',
    description: 'Travel booking and destination management platform'
  },
  {
    name: 'FashionForward',
    industry: 'Retail',
    location: 'Los Angeles, CA',
    size: '100-500',
    founded_year: 2014,
    website: 'https://fashionforward.example.com',
    description: 'Fashion retail and e-commerce platform'
  },
  {
    name: 'SportsTech',
    industry: 'Sports',
    location: 'Portland, OR',
    size: '50-100',
    founded_year: 2020,
    website: 'https://sportstech.example.com',
    description: 'Sports technology and analytics platform'
  },
  {
    name: 'LegalEase',
    industry: 'Legal',
    location: 'Washington, DC',
    size: '50-100',
    founded_year: 2017,
    website: 'https://legalease.example.com',
    description: 'Legal technology and document management'
  },
  {
    name: 'ConstructionPro',
    industry: 'Construction',
    location: 'Phoenix, AZ',
    size: '100-500',
    founded_year: 2011,
    website: 'https://constructionpro.example.com',
    description: 'Construction management and project planning'
  },
  {
    name: 'EntertainmentPlus',
    industry: 'Entertainment',
    location: 'Los Angeles, CA',
    size: '500-1000',
    founded_year: 2008,
    website: 'https://entertainmentplus.example.com',
    description: 'Entertainment production and content creation'
  }
];

async function seed() {
  try {
    // Clear existing data
    await pool.query('DELETE FROM companies');
    
    // Insert sample companies
    const insertQuery = `
      INSERT INTO companies (name, industry, location, size, founded_year, website, description)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;

    for (const company of sampleCompanies) {
      await pool.query(insertQuery, [
        company.name,
        company.industry,
        company.location,
        company.size,
        company.founded_year,
        company.website,
        company.description
      ]);
    }

    console.log(`✅ Seeded ${sampleCompanies.length} companies successfully`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seed();

