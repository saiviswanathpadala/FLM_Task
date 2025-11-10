import { motion } from 'framer-motion';
import { Building2, MapPin, Users, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Company } from '@/lib/api';

interface CompanyCardProps {
  company: Company;
  index: number;
}

export default function CompanyCard({ company, index }: CompanyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
    >
      <Card className="h-full transition-shadow hover:shadow-lg">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-xl mb-2">{company.name}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                <Building2 className="h-4 w-4" />
                {company.industry}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{company.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{company.size} employees</span>
          </div>
          {company.founded_year && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Founded {company.founded_year}</span>
            </div>
          )}
          {company.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {company.description}
            </p>
          )}
          {company.website && (
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-2"
            >
              Visit Website
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

