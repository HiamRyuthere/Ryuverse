import { Building, GraduationCap, Rocket, Users } from "lucide-react";

const timelineEvents = [
    {
        title: "Passed-Out Class 12th",
        year: "2023",
        description: "Completed my higher secondary education with a focus on commerce and mathematics.",
        icon: <GraduationCap />
    },
    {
        title: "Joined Holkar Science College",
        year: "2023",
        description: "Began my Bachelor of Computer Applications (BCA), diving deep into computer science fundamentals.",
        icon: <Building />
    },
    {
        title: "Led Team at Smart India Hackathon",
        year: "2024",
        description: "Assembled and led a talented team to compete in one of the world's biggest hackathons.",
        icon: <Users />
    },
    {
        title: "Still Going Ahead",
        year: "Present",
        description: "Continuously learning, building, and exploring new frontiers in the world of programming.",
        icon: <Rocket />
    },
]

export default function AcademicTimeline() {
    return (
        <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
            <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                    <div key={index} className="relative group">
                         <div className="absolute left-1/2 -translate-x-1/2 top-1 w-4 h-4 bg-primary rounded-full border-4 border-background transition-transform group-hover:scale-125"></div>
                         <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-x-8">
                            <div className={`md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                                <p className="text-muted-foreground text-sm font-semibold">{event.year}</p>
                                <h3 className="font-headline text-2xl text-foreground mb-1">{event.title}</h3>
                                <p className="text-muted-foreground">{event.description}</p>
                            </div>
                             <div className={`flex justify-center ${index % 2 === 0 ? 'md:order-2' : 'md:order-2'}`}>
                                <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                    {event.icon}
                                </div>
                            </div>
                            <div className={`hidden md:block ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}></div>
                         </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
