"use client"

import {useRef} from "react"
import {motion} from "framer-motion"
import {ChevronLeft, ChevronRight, Github, Globe, Instagram, Twitch, Youtube} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Badge} from "@/components/ui/badge"

export default function Team() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({left: -300, behavior: "smooth"})
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({left: 300, behavior: "smooth"})
    }
  }

  const teamMembers = [
    {
      name: "Kalarian Athecila",
      role: "CEO & Founder",
      image: "/assets/team/kalarianathecila.png?height=200&width=200",
      bio: "A passionate Minecraft mod developer and Windows modder.",
      skills: ["Java", "C++", "JS", "CSS", "HTML", "Windows Mod Development"],
      social: {
        github: "https://github.com/KalarianAthecila",
        youtube: "https://www.youtube.com/@SoncresityIndustries",
        twitch: "#",
        instagram: "https://www.instagram.com/soncresityindustries",
        website: "#",
      },
    },
    {
      name: "SkyKing_PX",
      role: "Junior Developer",
      image: "/assets/team/skyking_px.png?height=200&width=200",
      bio: "A young German developer with a passion for Minecraft and coding.",
      skills: ["Java", "Next.js", "PC Hardware"],
      social: {
        github: "https://github.com/SkyKingPX",
        youtube: "https://www.youtube.com/@SkyKingPX",
        twitch: "https://www.twitch.tv/skyking_px",
        website: "#",
        instagram: "#",
      },
    },
    {
      name: "Karanthos Athecila",
      role: "Developer",
      image: "/assets/team/karanthos.png?height=200&width=200",
      bio: "To be added",
      skills: ["Skills"],
      social: {
        github: "#",
        youtube: "#",
        twitch: "#",
        website: "#",
        instagram: "#",
      },
    },
    {
      name: "Sura",
      role: "Artist & 3D Modelling",
      image: "/assets/team/sura.png?height=200&width=200",
      bio: "I'm Sura, also known as Smiaten. One of 3D modellers of Soncresity Industries.",
      skills: ["Blender", "Blockbench"],
      social: {
        github: "#",
        youtube: "#",
        twitch: "#",
        website: "#",
        instagram: "#",
      },
    },
    {
      name: "Morvos Athecila",
      role: "Beta Tester",
      image: "/assets/team/morvos.png?height=200&width=200",
      bio: "To be added",
      skills: ["Java", "HTML", "JS"],
      social: {
        github: "#",
        youtube: "#",
        twitch: "#",
        website: "#",
        instagram: "#",
      },
    }
  ]

  return (
    <section id="team" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"/>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"/>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5}}
          >
            Meet Our <span className="text-primary">Team</span>
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/80"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.1}}
          >
            Meet the talented individuals at Soncresity Industries
          </motion.p>
        </div>

        <div className="relative">
          <div className="flex justify-between mb-6">
            <h3 className="text-2xl font-bold">Team Members</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollLeft}
                className="rounded-full hover-lift"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18}/>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollRight}
                className="rounded-full hover-lift"
                aria-label="Scroll right"
              >
                <ChevronRight size={18}/>
              </Button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto p-8 gap-6 snap-x snap-mandatory hide-scrollbar"
            style={{scrollbarWidth: "none", msOverflowStyle: "none"}}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] max-w-[300px] pl-2 pr-2 snap-start"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: index * 0.1}}
              >
                <Card className="h-full hover-scale border-border/50">
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto mb-4">
                      <Avatar className="w-24 h-24 border-2 border-primary/30">
                        <AvatarImage src={member.image || "/placeholder.svg"}
                                     alt={member.name}/>
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription
                      className="text-primary font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-foreground/70 mb-4">{member.bio}</p>
                    <div className="flex flex-wrap justify-center gap-2 mt-3">
                      {member.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center gap-3">
                    {member.social.github !== "#" && (
                      <Button size="sm" variant="ghost" className="w-9 h-9 p-0 rounded-full"
                              asChild>
                        <a href={member.social.github} target="_blank"
                           rel="noopener noreferrer">
                          <Github size={16}/>
                          <span className="sr-only">GitHub</span>
                        </a>
                      </Button>
                    )}
                    {member.social.website !== "#" && (
                      <Button size="sm" variant="ghost" className="w-9 h-9 p-0 rounded-full"
                              asChild>
                        <a href={member.social.twitch} target="_blank"
                           rel="noopener noreferrer">
                          <Globe size={16}/>
                          <span className="sr-only">Website</span>
                        </a>
                      </Button>
                    )}
                    {member.social.youtube !== "#" && (
                      <Button size="sm" variant="ghost" className="w-9 h-9 p-0 rounded-full"
                              asChild>
                        <a href={member.social.youtube} target="_blank"
                           rel="noopener noreferrer">
                          <Youtube size={16}/>
                          <span className="sr-only">YouTube</span>
                        </a>
                      </Button>
                    )}
                    {member.social.twitch !== "#" && (
                      <Button size="sm" variant="ghost" className="w-9 h-9 p-0 rounded-full"
                              asChild>
                        <a href={member.social.twitch} target="_blank"
                           rel="noopener noreferrer">
                          <Twitch size={16}/>
                          <span className="sr-only">Twitch</span>
                        </a>
                      </Button>
                    )}
                    {member.social.instagram !== "#" && (
                      <Button size="sm" variant="ghost" className="w-9 h-9 p-0 rounded-full"
                              asChild>
                        <a href={member.social.instagram} target="_blank"
                           rel="noopener noreferrer">
                          <Instagram size={16}/>
                          <span className="sr-only">Instagram</span>
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
