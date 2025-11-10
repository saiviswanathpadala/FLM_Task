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
      whileHover={{ y: -8, scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full bg-white/60 backdrop-blur-md border-white/20 shadow-lg hover:shadow-2xl transition-all overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <CardHeader className="relative">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-xl mb-2 text-[#0a66c2]">
                {company.name}
              </CardTitle>
              <CardDescription className="flex items-center gap-1.5 text-gray-600">
                <div className="p-1 bg-blue-100 rounded">
                  <Building2 className="h-3.5 w-3.5 text-[#0a66c2]" />
                </div>
                {company.industry}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 relative">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4 text-[#0084ff]" />
            <span>{company.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="h-4 w-4 text-[#00a699]" />
            <span>{company.size} employees</span>
          </div>
          {company.founded_year && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4 text-[#0084ff]" />
              <span>Founded {company.founded_year}</span>
            </div>
          )}
          {company.description && (
            <p className="text-sm text-gray-600 line-clamp-2 pt-2 border-t border-gray-200">
              {company.description}
            </p>
          )}
          {company.website && (
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0a66c2] hover:text-[#004182] transition-colors mt-2 group/link"
            >
              Visit Website
              <ExternalLink className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

