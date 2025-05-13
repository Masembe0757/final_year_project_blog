import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const SocialIcons = ({  githubUrl = "#", linkedinUrl = "#" }) => {
  return (
    <div className="flex items-center gap-4">
      <a 
        href={githubUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="transition-colors"
      >
        <Github className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer" />
      </a>
      <a 
        href={linkedinUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="transition-colors"
      >
        <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer" />
      </a>
    </div>
  );
};

export default SocialIcons;