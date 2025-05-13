import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import SocialIcons from "./SocialIcons"
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: "Aparo Cecilia",
    studentNumber: "2100705605",
    registrationNumber: "21/U/05605/EVE",
    role: "Research Team Member",
    specialization: "AI Implementation",
    image: "/aparo.jpg?height=400&width=400",
    email:"ceciliaheavens256@gmail.com",
    GitHub : "https://github.com/APAROCECILIA",
    Linkedin: "https://www.linkedin.com/in/aparo-cecilia-8710bb254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Byansi Anthony",
    studentNumber: "2100700006",
    registrationNumber: "21/U/0006",
    role: "Research Team Member",
    specialization: "Game Development",
    image: "/byansi.jpeg?height=400&width=400",
    GitHub : "https://github.com/AnthonyByansi",
    email:"byansianthony@gmail.com",
    Linkedin: "https://www.linkedin.com/in/anthony-byansi-7a027222a/"
  },
  {
    name: "Masembe Sendi Joseph",
    studentNumber: "2100717978",
    registrationNumber: "21/U/17978/EVE",
    role: "Research Team Member",
    specialization: "Data Analysis",
    image: "/sendi.jpeg?height=400&width=400",
    GitHub : "https://github.com/Masembe0757",
    email:"sendyj886@gmail.com",
    Linkedin: "https://www.linkedin.com/in/sendi-joseph-480522254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Ochieng Devote Boniface",
    studentNumber: "2100706323",
    registrationNumber: "21/U/06323/EVE",
    role: "Research Team Member",
    specialization: "System Architecture",
    image: "/placeholder.svg?height=400&width=400",
    email:"ochiengdevote@gmail.com",
    GitHub : "https://github.com/Boniface-devote",
    Linkedin: "www.linkedin.com/in/devote-boniface-69643b254"
  },
]

const supervisors = [
  {
    name: "Dr. Mary Nsabagwa",
    role: "Primary Supervisor",
    department: "Department of Networks",
    expertise: "AI and Machine Learning",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dr. Ruth Mutebi",
    role: "Co-Supervisor",
    department: "Department of Networks",
    expertise: "Educational Technology",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-[64rem] mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Research Team</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A dedicated group of researchers and supervisors working to revolutionize traffic education through
              technology and innovation.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {teamMembers.map((member) => (
              <Card key={member.studentNumber} className="overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {member.specialization}
                  </Badge>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Student No: {member.studentNumber}</p>
                    <p>Email: {member.email}</p>
                    <p>Reg No: {member.registrationNumber}</p>
                  </div>
                  <SocialIcons 
                    githubUrl={member.GitHub}
                    linkedinUrl={member.Linkedin}
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Supervisors */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Project Supervisors</h2>
            <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
              {supervisors.map((supervisor) => (
                <Card key={supervisor.name} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <Image
                        src={supervisor.image || "/placeholder.svg"}
                        alt={supervisor.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="text-xl font-bold">{supervisor.name}</h3>
                        <p className="text-primary">{supervisor.role}</p>
                        <p className="text-sm text-muted-foreground">{supervisor.department}</p>
                        <Badge variant="outline" className="mt-2">
                          {supervisor.expertise}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

