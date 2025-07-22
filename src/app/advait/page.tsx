
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, ExternalLink, Feather } from 'lucide-react';
import ShankaracharyaTimeline from '@/components/shankaracharya-timeline';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const pageContent = {
  en: {
    title: "Advaita Vedanta",
    tagline: "Thou Art That",
    myPathTitle: "My Path with Advaita",
    myPathContent: "As a thinker and a poet, I've always been drawn to the essential. Advaita Vedanta provides the ultimate minimalist philosophy—it distills the entire cosmos into a single, unified truth. It resonates with me because it's not a belief system to be adopted, but a truth to be realized through introspection and inquiry. It informs my poetry, my approach to problem-solving, and my search for clarity in a complex world. The understanding that the consciousness within me is the same consciousness that pervades everything brings a sense of profound peace, connection, and fearlessness. It is the ultimate return to the source.",
    oceanTitle: "The Ocean in a Drop",
    oceanContent1: "Advaita Vedanta is one of the most profound schools of Indian philosophy. At its core is the principle of non-duality—the idea that the individual soul (Atman) is not different from the ultimate reality (Brahman). It teaches that the universe we perceive, with all its diversity and separation, is a manifestation of one single, indivisible consciousness. Like waves in the ocean, we appear as separate entities, but our true nature is the ocean itself.",
    oceanContent2: "The goal of Advaita is not to become something new, but to realize what we already are. It is the removal of ignorance (Avidya) that veils our true identity, leading to liberation (Moksha)—freedom from the cycle of suffering and rebirth.",
    shankaraIntroTitle: "The Great Teacher: Adi Shankaracharya",
    shankaraIntroContent: "Adi Shankaracharya was a seminal philosopher and theologian from India, the foremost exponent of the Advaita Vedanta school of philosophy, whose doctrines have influenced Indian thought for over a thousand years. With his brilliant dialectics and profound spiritual insight, he synthesized the teachings of the Upanishads, the Brahma Sutras, and the Bhagavad Gita to establish the non-dualistic nature of reality.",
    timelineTitle: "The Journey of Adi Shankaracharya",
    timelineEvents: [
      {
        year: "788 CE",
        title: "Birth in Kalady, Kerala",
        description: "Born into a Nambudiri Brahmin family, Shankara was a prodigy who mastered the Vedas by the age of eight.",
      },
      {
        year: "c. 800 CE",
        title: "Renunciation & Discipleship",
        description: "Left home in search of truth and became a disciple of Govinda Bhagavatpada on the banks of the Narmada river.",
      },
      {
        year: "c. 800-810 CE",
        title: "Masterful Commentaries (Bhasyas)",
        description: "Authored profound commentaries on the Upanishads, Brahma Sutras, and Bhagavad Gita, establishing the non-dualistic philosophy of Advaita.",
      },
      {
        year: "c. 810 CE",
        title: "Debate with Mandana Mishra",
        description: "Engaged in a legendary philosophical debate with the ritualist scholar Mandana Mishra, with Mishra's wife, Ubhaya Bharati, as the judge. Shankara's victory was a pivotal moment for Advaita.",
      },
      {
        year: "c. 810-820 CE",
        title: "Digvijaya Yatra (Tour of Victory)",
        description: "Traveled across India, engaging in debates and re-establishing the primacy of Vedic wisdom, founding four major monasteries (mathas).",
      },
      {
        year: "c. 820 CE",
        title: "Mahasamadhi in the Himalayas",
        description: "At the young age of 32, after completing his life's mission, he is said to have walked into the Himalayas and was never seen again, attaining his final union with the Absolute.",
      },
    ],
    resourcesTitle: "Resources for the Seeker",
    resources: [
      {
        title: 'Vivek Chudamani',
        description: 'A masterpiece by Adi Shankaracharya, offering a step-by-step guide to realizing the Self. Now available to read on its own dedicated page.',
        href: '/advait/vivek-chudamani',
        external: false,
      },
      {
        title: 'Acharya Prashant',
        description: 'A contemporary spiritual teacher offering direct and powerful guidance based on Advaitic wisdom.',
        href: 'https://acharyaprashant.org',
        external: true,
      },
      {
        title: 'Adi Shankaracharya Bhasya',
        description: "The foundational commentaries on the Upanishads, Brahma Sutras, and Bhagavad Gita.",
        href: '/advait/bhasya',
        external: false,
      },
    ]
  },
  hi: {
    title: "अद्वैत वेदान्त",
    tagline: "तुम वही हो",
    myPathTitle: "अद्वैत के साथ मेरा मार्ग",
    myPathContent: "एक विचारक और कवि के रूप में, मैं हमेशा सार की ओर आकर्षित रहा हूँ। अद्वैत वेदान्त परम न्यूनतम दर्शन प्रदान करता है - यह संपूर्ण ब्रह्मांड को एक ही, एकीकृत सत्य में समाहित करता है। यह मेरे साथ प्रतिध्वनित होता है क्योंकि यह अपनाने के लिए एक विश्वास प्रणाली नहीं है, बल्कि आत्मनिरीक्षण और जांच के माध्यम से महसूस किया जाने वाला सत्य है। यह मेरी कविता, समस्या-समाधान के प्रति मेरे दृष्टिकोण, और एक जटिल दुनिया में स्पष्टता की मेरी खोज को सूचित करता है। यह समझना कि मेरे भीतर की चेतना वही चेतना है जो सब कुछ में व्याप्त है, गहन शांति, जुड़ाव और निर्भयता की भावना लाती है। यह स्रोत की ओर अंतिम वापसी है।",
    oceanTitle: "एक बूंद में सागर",
    oceanContent1: "अद्वैत वेदांत भारतीय दर्शन की सबसे गहन शाखाओं में से एक है। इसके मूल में अद्वैत का सिद्धांत है - यह विचार कि व्यक्तिगत आत्मा (आत्मन) अंतिम वास्तविकता (ब्रह्म) से अलग नहीं है। यह सिखाता है कि हम जो ब्रह्मांड देखते हैं, अपनी सारी विविधता और अलगाव के साथ, एक ही, अविभाज्य चेतना की अभिव्यक्ति है। समुद्र में लहरों की तरह, हम अलग-अलग संस्थाओं के रूप में दिखाई देते हैं, लेकिन हमारा सच्चा स्वरूप स्वयं समुद्र है।",
    oceanContent2: "अद्वैत का लक्ष्य कुछ नया बनना नहीं है, बल्कि यह महसूस करना है कि हम पहले से क्या हैं। यह उस अज्ञान (अविद्या) को दूर करना है जो हमारी वास्तविक पहचान पर पर्दा डालता है, जिससे मोक्ष मिलता है - दुख और पुनर्जन्म के चक्र से मुक्ति।",
    shankaraIntroTitle: "महान गुरु: आदि शंकराचार्य",
    shankaraIntroContent: "आदि शंकराचार्य भारत के एक मौलिक दार्शनिक और धर्मशास्त्री थे, जो अद्वैत वेदांत दर्शन के सबसे प्रमुख प्रतिपादक थे, जिनके सिद्धांतों ने एक हजार से अधिक वर्षों तक भारतीय विचार को प्रभावित किया है। अपनी शानदार द्वंद्वात्मकता और गहन आध्यात्मिक अंतर्दृष्टि के साथ, उन्होंने वास्तविकता की अद्वैत प्रकृति को स्थापित करने के लिए उपनिषदों, ब्रह्म सूत्रों और भगवद गीता की शिक्षाओं का संश्लेषण किया।",
    timelineTitle: "आदि शंकराचार्य की यात्रा",
    timelineEvents: [
      {
        year: "788 ईस्वी",
        title: "कलाडी, केरल में जन्म",
        description: "एक नंबूदरी ब्राह्मण परिवार में जन्मे, शंकर एक विलक्षण प्रतिभा थे, जिन्होंने आठ साल की उम्र तक वेदों में महारत हासिल कर ली थी।",
      },
      {
        year: "लगभग 800 ईस्वी",
        title: "संन्यास और शिष्यत्व",
        description: "सत्य की खोज में घर छोड़ दिया और नर्मदा नदी के तट पर गोविंद भगवत्पाद के शिष्य बन गए।",
      },
      {
        year: "लगभग 800-810 ईस्वी",
        title: "उत्कृष्ट भाष्य",
        description: "उपनिषदों, ब्रह्म सूत्रों और भगवद गीता पर गहन भाष्य लिखे, जिससे अद्वैत के अद्वैतवादी दर्शन की स्थापना हुई।",
      },
      {
        year: "लगभग 810 ईस्वी",
        title: "मंडन मिश्र के साथ शास्त्रार्थ",
        description: "कर्मकांड के विद्वान मंडन मिश्र के साथ एक पौराणिक दार्शनिक बहस में शामिल हुए, जिसमें मिश्र की पत्नी उभय भारती निर्णायक थीं। शंकर की जीत अद्वैत के लिए एक महत्वपूर्ण क्षण था।",
      },
      {
        year: "लगभग 810-820 ईस्वी",
        title: "दिग्विजय यात्रा",
        description: "पूरे भारत में यात्रा की, वाद-विवाद में शामिल हुए और वैदिक ज्ञान की प्रधानता को फिर से स्थापित किया, चार प्रमुख मठों की स्थापना की।",
      },
      {
        year: "लगभग 820 ईस्वी",
        title: "हिमालय में महासमाधि",
        description: "32 वर्ष की छोटी सी उम्र में, अपने जीवन का मिशन पूरा करने के बाद, कहा जाता है कि वे हिमालय में चले गए और फिर कभी नहीं देखे गए, उन्होंने परम में अपना अंतिम विलय प्राप्त कर लिया।",
      },
    ],
    resourcesTitle: "साधक के लिए संसाधन",
    resources: [
      {
        title: 'विवेक चूड़ामणि',
        description: 'आदि शंकराचार्य की एक उत्कृष्ट कृति, जो आत्म-साक्षात्कार के लिए एक कदम-दर-कदम मार्गदर्शिका प्रदान करती है। अब अपने समर्पित पृष्ठ पर पढ़ने के लिए उपलब्ध है।',
        href: '/advait/vivek-chudamani',
        external: false,
      },
      {
        title: 'आचार्य प्रशांत',
        description: 'एक समकालीन आध्यात्मिक गुरु जो अद्वैत ज्ञान पर आधारित प्रत्यक्ष और शक्तिशाली मार्गदर्शन प्रदान करते हैं।',
        href: 'https://acharyaprashant.org',
        external: true,
      },
      {
        title: 'आदि शंकराचार्य भाष्य',
        description: 'उपनिषदों, ब्रह्म सूत्रों और भगवद गीता पर आधारित भाष्य।',
        href: '/advait/bhasya',
        external: false,
      },
    ]
  }
};

const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" }
};


export default function AdvaitPage() {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const content = pageContent[language];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        
        <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
                <Button 
                    onClick={() => setLanguage('en')} 
                    className={`rounded-r-none ${language === 'en' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
                >
                    English
                </Button>
                <Button 
                    onClick={() => setLanguage('hi')} 
                    className={`rounded-l-none ${language === 'hi' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
                >
                    हिंदी
                </Button>
            </div>
        </div>

        <motion.header 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-headline text-5xl md:text-7xl mb-4">{content.title}</h1>
          <p className="text-3xl font-headline text-primary">तत्त्वमसि</p>
          <p className="text-xl text-muted-foreground mt-2">{content.tagline}</p>
        </motion.header>
        
        <motion.div className="mb-16" {...sectionAnimation}>
            <Image 
                src="/AdvaitVedant.png"
                alt="Himalayan mountains"
                width={1200}
                height={500}
                className="rounded-lg object-cover"
                data-ai-hint="himalayas landscape"
            />
        </motion.div>

        <article className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground space-y-12">
          <motion.section className="text-center border-b border-border pb-10" {...sectionAnimation}>
              <Feather className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="font-headline text-4xl">{content.myPathTitle}</h2>
              <p>
                {content.myPathContent}
              </p>
          </motion.section>

          <motion.section {...sectionAnimation}>
            <h2 className="font-headline text-4xl text-center">{content.oceanTitle}</h2>
            <p>
             {content.oceanContent1}
            </p>
            <p>
              {content.oceanContent2}
            </p>
          </motion.section>

          <motion.section {...sectionAnimation}>
            <h2 className="font-headline text-4xl text-center">{content.shankaraIntroTitle}</h2>
            <p className="text-center">
             {content.shankaraIntroContent}
            </p>
          </motion.section>
        </article>

        <motion.section className="my-20" {...sectionAnimation}>
            <h2 className="font-headline text-4xl text-center mb-12">{content.timelineTitle}</h2>
            <ShankaracharyaTimeline timelineEvents={content.timelineEvents} />
        </motion.section>
        
        <motion.section className="mt-20" {...sectionAnimation}>
            <h2 className="font-headline text-4xl text-center mb-10">{content.resourcesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {content.resources.map((resource) => (
                    <Link href={resource.href} key={resource.title} target={resource.external ? '_blank' : '_self'} rel="noopener noreferrer">
                        <div className="bg-card/50 p-6 rounded-lg border hover:border-primary transition-colors duration-300 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <BookOpen className="h-8 w-8 text-primary" />
                                {resource.external && <ExternalLink className="h-4 w-4 text-muted-foreground" />}
                            </div>
                            <h3 className="font-headline text-2xl mb-2">{resource.title}</h3>
                            <p className="text-muted-foreground flex-grow">{resource.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </motion.section>

      </div>
    </div>
  );
}
