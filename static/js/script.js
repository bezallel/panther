document.addEventListener("DOMContentLoaded", function () {
    const chatForm = document.getElementById("chat-form");
    const chatBox = document.getElementById("chat-content");
    const userInput = document.getElementById("textInput");

    const intents = [
        {
            "tag": "introduction",
            "patterns": ["hello", "good day", "i hail o", "hola", "how far?", "whats up?", "good morning", "good afternoon", "hello hello", "good evening", "hey", "hey hey", "hi", "hi hi", "good day", "how is it going?", "wassup?", "wozup?", "how far na?", "is anyone there?", "knock knock, Sibi hello", "good day Sibi", "Sibi good day", "Sibi how far?", "how far Sibi?", "whats up Sibi?", "Sibi whats up?", "good morning Sibi", "Sibi good morning", "good afternoon Sibi", "good evening Sibi", "hey Sibi", "hey hey Sibi", "hi Sibi", "hi hi Sibi", "how is it going Sibi?", "wassup Sibi?", "wozup Sibi?","oya talk", "how far na Sibi?", "Sibi are you there?", "knock knock Sibi"],
            "responses": ["Welcome. I am Sibi. Here to assist in your learning Pidgin English.\nCategories Available: Sentence Structure, Expressions, Traits, Action, Pleasantries, Quiz, and Random Nigerian Facts.\nHow to Explore Categories:\nType a category you're interested in, like 'sentences' or 'traits.'\nPress 'Enter' and a navigation button will appear.\nClick the button to explore content in your chosen category.\nWhen done, type a new category and repeat the process.\nEnjoy exploring and learning!",
              
              "Good day, I am Sibi. Here to help you learn Pidgin English.\nI offer the following categories: Sentence Structure, Expressions, Traits, Action, Pleasantries, Quiz, and Random Nigerian Facts. \nHow to Explore Categories:\nType a category you're interested in, like 'sentences' or 'traits.'\nPress 'Enter' and a navigation button will appear.\nClick the button to explore content in your chosen category.\nWhen done, type a new category and repeat the process.\nEnjoy exploring and learning!", 
            
            "Hello, I am Sibi. Let me teach you Pidgin English.\nSee Available Categories: Sentence Structure, Expressions, Traits, Action, Pleasantries, Quiz, and Random Nigerian Facts. \nHow to Explore Categories:\nType a category you're interested in, like 'sentences' or 'traits.'\nPress 'Enter' and a navigation button will appear.\nClick the button to explore content in your chosen category.\nWhen done, type a new category and repeat the process.\nEnjoy exploring and learning!"]
            },
            {
            "tag": "Interesting",
            "patterns": ["This is interesting", "this is impressive", "i enjoyed this lesson", "This is educational", "this is useful", "nice lesson"],
            "responses": ["I'm glad you feel that way and happy to be of use. If you have any feedback or suggestions, Kindly send them to 'peaceedogun@gmail.com'."]
            },
            {
            "tag": "quiz",
            "patterns": ["start Quiz", "quiz", "Begin quiz", "go to quiz", "take quiz"],
            "responses": ["Sure thing. If you feel ready to take the quiz, click on the animated logo(Sibi) at the top-left corner of the screen. Goodluck!"]
            },
            {
            "tag": "just-list",
            "patterns": ["list the categories alone?", "just list categories", "just categories", "only categories", "only list categories", "list", "list categories"],
            "responses": ["Here you go: Expressions, Pleasantries, Traits, Action, Sentence structure and Quiz. Retype the category you desire until you have completed it. You may then move on to the next."]
            },
            {
            "tag": "Sentence",
            "patterns": ["sentences", "sentence","sent","senten","sentence structure", "more sentences", "more sentence","SENTENCES", "structure"],
            "responses": [
            "In the Sentence Structure category, You will learn basic sentence structure which includes conjugations, filler words and simples sentences. At the end of this category, you should be able to construct basic sentences.",
            
            "Here's the conjugation of the verb 'To be' in Pidgin:\nI be - (I am).\nYou be or You dey - (You are).\nHe/She/e be - (He/She/It is).\nWe be - (We are).\nDem be or Dem dey - (They are).",
        
            "To know in pidgin is the word 'sabi', Under certain circumstances, the word 'fit' which means 'to do' may be used instead.\nHere's the conjugation of the verb 'To know' or 'sabi':\nI sabi,\nYou sabi,\nHe/She/e sabi,\nWe sabi, \nDem sabi.",
                
            "To do in pidgin is the word 'fit', It emphasizes the ability to do a thing.\nHere's the conjugation of the verb 'Fit':\nI fit,\nYou fit,\nHe/She/e fit,\nWe fit, \nDem fit.",
        
            "'To have' in pidgin is 'to get'. Here's the conjugation of the verb:\nI get - (I have).\nYou get - (You have).\nHe/She/e get - (He/She/It has).\nWe get - (We have).\nDem get - (They have).\n\n Past tense for to have(To get) is I don - (I already):\n I don tell am - (I told him/her)\nYou don see am? - (Have you seen it?).\n\n I neva - (To Not have/do).\nI neva chop - (I havent eaten).\nI neva see am - (I havent seen it).",
        
            "Here's the conjugation of the verb 'To go':\nI dey go/commot - (I am going/leaving).\nYou dey go/commot - (You are going/leaving).\nHe/She/e dey go/commot - (He/She/It is going/leaving).\nWe dey go/commot - (We are going/leaving).\nDem dey go/commot - (They are going/leaving).\n\n To do (future tense) is 'I go'(I will):\n I go call you tomorrow - (I will call you tomorrow).\nI go follow am talk - (I will talk to him/her)",
        
            "In pidgin, although there are similarities in english, certain words are different... Lets call them fillers.\nHere are some of them:\nWan/Won (wahn/wohn) - (Want).\nWetin (waytin) - (What).\nYarn/Gist - (Narrate/Chat).\nFollow me - (With/To Me). Example: Follow me talk - 'talk to me'.\nFollow me go -'Go with me'.\nChop - (Eat).\nWaka - (Walk).",
        
            "Some more fillers:\nSidon/Sidan - (Sit Down).\nAahs/aus - (House).\nVex/Vess - (Angry).\nProvoke/head scatter - (Rage).\nConsign - (Concern).\nGrab/Alternative (Sabi) - (understand).\nWahala - (problem/trouble).\nBefore - (previously: past tense).",
        
            "\n• I/You been wan - (I wanted to). Example: I been wan wear dat cloth - 'I wanted to wear that piece of clothing'.\n• I been wan before - (I wanted to previously). Example: I been wan tell you before - 'I wanted to tell you previously'.\n• I/You go for or I/You for - (I should have). Example: I for chop before i commot house dis morning - 'I should have eaten before i left the house this morning'.",
        
            "\n• I/You for no - (I/You shouldnt have). Example: I for no commot house this morning - 'i shouldnt have left the house this morning'.\n• I for never/never - (shouldnt have yet or haven't). Example: I/You for never tell am - 'I/You shouldnt have told him/her/them yet'.",
        
            "\n• I for say: Used when you want to make a suggestion. Example: I for say make you charge your phone before you commot but i nor know weda you go gree - 'I would have preferred that you charge your phone before leaving but i'm not sure if you agree. gree = agree'.",
        
            "\n• Suppose/No suppose: To suggest or a statement of intent, pointing out or querying if something being done/to be done is right or wrong. This can be a question, a decision or letting someone know if their decision or actions are right or wrong.\nExample 1: You no suppose wear black inside heat - 'You shouldn't wear black when it's hot out'. In this scenario, someone probably complained of the heat and it is being pointed out that the fact that they wore black clothing has worsened the situation.",
        
            "More on Suppose/No suppose:\nExample 2: I suppose wash the rice before i boil am abi? - 'I should wash the rice before cooking it right?'. In this context, you're trying to get confirmation on a decision you are about to take or have taken and if or not that decision is correct.\n\nExample 3: I suppose dey go gym every weekend - 'I should be going to the gym every weekend'. This is a statement or declaration of intent. In this context, You have made a decision that you believe is beneficial to you and are not seeking validation or confirmation.",
        
            "\n• I nor know - (i dont/didnt know).\n• I nor know before - (I never Knew).\n• I nor wan know - (I dont want to know).\n \n• Wetin you dey talk - (What are you saying).\n• Wetin you say make i talk? - (What do you want me to say?).\n• Wetin i talk/tell you? - (What did i say/tell you?).\nWetin you tink say i dey talk? - (What do/did you think i am/was saying?).\n• I say make i tell you - (I'm letting you know).",
        
            "\n• I dey miss you: I miss you.\n• I no gree - I don't agree, I disagree.\n• I dey happy: I am happy.2. Body dey catch me/you or Body dey sweet me/you: I am/you are excited.\n• Where you know say you dey go?/ where you dey go? Meaning: Where do you think you're going to?/ Where are you going?.",
        
            "\n• Which side you dey go? - What direction are you headed?\n• Wetin?:(weigh-teen)what?/What is it?.\n• Me sef/Me nkuh(oonkuh): Me too/What about me?.\n• Dis food sweet well well: This phrase means This meal is delicious. You can also say 'Dis food sweet no be small'.",
        
            "\n• No be so: Meaning: It is not so/That is not the way (usually involves an activity).\nExample: no be so dem dey wash motor or no be so e take happen (that is not how to wash a car or that's not how it happened).\n\n• E go well: It works well, it works great. Can be used to assure someone that their outfit is paired nicely, their food tastes great, their hairstyle looks good on them and so on.",
        
        
            "\n• Na you i dey wait for/ I dey wait for you. Meaning: You are the one I am waiting for/I am waiting for you.\n• No be you i dey follow talk?/No be you i dey follow talk. Meaning: Aren't you the one I am speaking to? / You are not the one I am speaking to. They are the same words with one being a question but can mean different things altogether. The difference between them is highly dependent on your tone/pitch.\n• I no get time/your time - (I dont have time/time for you).",
          
            "\n• Abi/shey/ba (ah-bee/shay/ bah). English version: Right? Example: You are coming to my party abi/shey/ba? (You are coming to my party, right?).\n An alternative to abi and shey is shebi, which is its original and full form. From the yoruba tribe, it also means 'right? and it can be used as a question. Example: Shebi i told you?'. Meaning 'I told you right? or Didn't i tell you?'.\n• You dey mad?: Are you mad?",
        
            "\n• E no consign me/you: It is none of my/your concern.\n•  No be my consign/business: It is none of my concern/business.\n• You say? / Wetin you say?. Meaning: You said what? /What did you say?. May be used interchangeably.\n• She/he/e say? : She/he/non gender specific said?\n• She/he/e say wetin?: She/he/non gender specific said what?",
        
            "End of 'Sentence structure'. Move on to 'Expressions' or take the quiz if you think you're ready."
            ]
            },
            {
            "tag": "Expressions",
            "patterns":["expression", "Expressions", "more expressions", "express", "exp", "press", "show me expressions", "teach me expressions", "express positive", "show me all expressions","more expressions", "more expression"],
            "responses": [
            "Welcome to expressions. The expressions category involves more complex sentences. They enrich and enhance conversations with a variation of slangs, witticisms and adage's.",
            
            "• The thing wey my eye don see, my mouth no go fit talk am: Meaning: What I have seen is too great to express with words. Used by people who have witnessed something extremely jarring/shocking, unbelievable or crazy. It is the equivalent of 'I am shook.",
        
            "• Ko Po Ke or KPK (koh-kpuh-keh):Means isn't it abundant/ plenty/many/surplus?. Typically used in celebratory situations. Example: you bought a house, a car, threw a lavish party etc. \nThe response will be: O po Pa/O po Gan or OPP/OPG (oh-kpuh-kpah or oh-kpuh-gun).It is an acknowledgement that it is indeed abundant/surplus/plenty/many.",
        
            "• I dont wanna be a mechanic, I wanna be a baller: This slang started on TikTok, where random people express their desires to live lavish lifestyles and avoid the life of a mechanic (considered as poor/poverty).\n• Shey you dey whine me? or You dey whine me? Meaning: 'You're Kidding right?' or 'Are you kidding me?'\n• Obodo Oyibo (oh-bow-dough-yee-bow):From the Igbo Tribe.Meaning - White man's land.\n• Sabi: (sah-bee)Know, understand, I nor no: I don't know. I no sabi: I don't understand or I don't know.",
        
            "• The thing make brain. Meaning: The thing is very good/delicious/nice/lovely/impressive/attractive. A way to say you are pleased/impressed. Example: This food make brain or the car make brain.\n• Butta my bread: Answered prayers. Example: God don butta my bread which means God has answered my prayers. (butta = butter).",
        
            "• Na wetin I wan dey do now: This is what i'm going to stat doing from now on.\nA statement of intent to start a routine or new pattern of behavior. Example: na wetin dey bring money i wan de do now. Meaning: I have decided to start doing only things that bring me money.\n• I no get: I don't have.\n• Wetin dey happen?: What's going on?, What's happening?.\n• Now now or na na: Immediately.\n• Where you dey go? (Where are you going?).",
            
            "• Breeze don blow, fowl yansh (yansh -> buttocks/derriere/backside) don open. Meaning: What was hidden has been exposed. A term used when a lie/falsehood has been unearthed/exposed.\n• Who dey breet?: Means Who is breathing/awake?. Coined by Davido.Meaning: A term used to draw attention to something impressive. Similar to 'e choke'Example: Tobi got new shoes and so he steps out in them or maybe records them as he says 'who dey breet?'.It is not restricted to any situation and can be used anytime.",
        
            "• Notin Spoil/ notin do you: Means all is well. Used when a mistake is made and you wish to let someone know you have no issues with them and its alright. It may also be used as a form of praise to mean you are without blemish or are doing great.\n• Sapa:(sah-kpah): To be broke (poverty).",
        
            "• Wasere:(wah-shay-ray) Meaning: A word used to praise or appreciate someone after a benevolent act. Literally means you will prosper. Example: Thanks bro, wasere.\n• You be correct person/man/woman: You are a reasonable person, You are a savvy person, You are a likeable person. Typically used when someone is pleased with you or vice versa.\n• Your head correct: You're smart, sharp, savvy.",
        
            "• Agba:(ah-gba). Meaning: A big boss. Mostly used to praise a rich person or to tease people. Example: You be agba now, show me love.\n\n• O ti Zeh: (oh-tee-zeh) Meaning: It has clicked or worked out Example: The contract don Zeh.. O ti zeh.\n• Betta dey?/Any betta?: Anything good? / any good news?",
        
            "• Urgent 2k: Meaning: Emergency funds often demanded during hard times.\nExample: I am tired of them reaching out to me only when they need urgent 2k.\n• Street: Ghetto neighborhood. Example: Bro, I'm from the streets.\n• You be betta person/man/woman: You are a good person, you are a kind person, you are a nice person. Typically used when someone admires you or vice versa.",
        
            "• No be me and you. Meaning: Literally means it is not you and I. A dramatic way to say 'NEVER!!!'. To express and over emphasize to another person that you will not be going or doing whatever is being asked/demanded of you \n• Motor don jam am: Meaning: A term derived from the song 'Egungun(eh-goon-goon) be careful' by the artist 'Obasere' it is used as a form of expression to convey that someone has faced the consequences of their actions.",
        
            "• kasala don burst/yawa don gas (kah-sah-lah/yah-wah): There is trouble.\n• Which kind wahala be dis?: What kind of problem is this. Used to express frustration.\n• You don cook beans: You screwed up.\n• Oya(oh-yah): Can be used in may ways and mean diffeent things just like 'ehen'. It could mean the following: Alright then, come on(hurry up), come on(please).\n• 70 years old man: Typically used to shame an adult male(30's and above) who behaves childishly/shamefully.",
         
            "• Werey dey disguise (way-ray): A person who pretends/tries to hide their true colors. Used to call out the fake person or to tell(warn) others of the person.\nMeaning 2: Wolf in sheep clothing. Example: A Corrupt politician who acts caring and concerned when elections are around the corner or that lazy staff who poses as a hard worker whenever the boss is around.",
        
            "• Village pipo (people pronounced pee-po): Enemies of progress. Derived from common plots in old Nigerian movies where family members from a person’s home town or close friends resort to voodoo in order to ensure the person does not succeed at anything.",
        
            "• God Abeg: God Please. To plead to God. Example: God abeg run am for me. Run am -> (do it).\n• Juju/jazz: Meaning: voodoo. Example: Tope used juju/jazz on her boyfriend.\n• E don enter one chance. Meaning: To fall into a trap, to find yourself in an unfavorable situation unexpectedly or ignorantly.\n• I no get anytin to tell you: Meaning: I have nothing to say to you or I have no words.",
          
            "• Getat: Get out.\n• Who you epp?: Meaning1: Who have you helped or uplifted? \nMeaning2. What have you done that is worthy of respect?. Often used to humble a person prone to bragging and/or showing off their wealth.\n• Gbam!: From the Igbo tribe. Meaning: To 'concur', 'agree completely', 'exactly', 'precisely'.\nBros J, you too much: Jesus, you are too much.",
        
            "• I go tear you slap/I go slap you: A dramatic way to say I will slap you!.\n• Commot for my front: Get out of my face, leave my presence.\n• Na ogun dey kee you? Is it Ogun (the deity) that torments you?\nOgun kee you there: May Ogun (the deity) kill you. To curse a person.\n• No let body catch you o: Don't get too excited/cocky. Used as a warning to someone not to overstep.\n• Body dey catch am: He/She is getting cocky. May also be used in neutral situations to merely point out that someone is excited.",
        
            "• Dem send you?: Have you been sent to torment me? Dem in this context would mean unknown enemies.\n• K-leg: Questionable. Example: Your story get k-leg! Which means your story or gist sounds suspect, false or exaggerated.\n• Abeg(ah-beg): Meaning: Please.Example: Abeg forgive her.",
        
            "• Commot! (cuh-mutt): Meaning go, move, leave, or get out!.\nExample: Make we commot (Let us go out) - friendly speech.\n Commot for there (leave that place or get out) - Rude speech. Example: Comot for road (Move out of the way or move over).\n• You too much: You are far too kind. Thank you. Good job!",
        
            "• I go change am for you o: Used as a warning to someone who is being annoying. if it is more than 1 person, you would say 'I go change am for una(oona) o'.\nIt is to inform them that your calm demeanor will not last much longer if they continue to annoy you.\n• E be like film trick: This phrase is used to express incredulity, especially when reporting a scenario or circumstance.\n•Wetin(way-teen): Meaning: What? Example: Wetin you want? 'what do you want?'",
           
            "• Vex, Vess or para(pah-rah) : To Upset/annoy or provoke. \nExample: no vex me! Or no dey do wetin(wheytin) dey vex me; Which means: Don't upset me! Or stop doing things that annoy me. \nYou may add 'abeg' as in 'no vex me abeg' at the end, which makes it's a rude plea 'dont annoy me PLEASE!!!'. You could use 'I go para for you/una(oona) o' which is to say i will lose my temper at you/all of you.\nYou may also use the word 'provoke' directly. Example:'That guy don provoke' which means 'That guy is enraged'",
            
            "• Fall my hand: 'To be disappointed', 'to let down', 'To embarrass or humiliate'. \nExample: If Sarah promised her friend taht she would be on time to deliver food for a party but then didnt show up at all which was embarassing, \nSarah's friend could say 'Sarah fall my hand'; the people who were there could also say 'Sarah fall her friend hand'. You could also use the word 'disgrace' directly.",
        
            "• You Pour sand for my garri: You have sabotaged my plans, you have ruined my plans.\n• Dem no born you well. Meaning1: You wouldn't dare. \nMeaning2: You won't try it. \nMeaning3: 'F' around and find out.\n• See me see wahala/trouble: An exclamation for when there is a problematic situation or you are in one. most likely involving a problematic person or situation.",
        
            "• Agba:(ah-gba) Meaning: A big boss. Mostly used to praise a rich person or to tease people. Example: You be agba now, show me love.\n• Na me fuck up/ Na me do myself: I brought this upon myself/I did this to myself.\n• Our mumu(moo-moo) no too much?: Haven't we been foolish for long enough?.\n• Ko necessary (co-necessary): It isn't necessary. Used when a person is doing the most for no reason.",
          
            "• Shege (shay-gay): The term has it's origin in the Hausa(how-sah) language. It means to suffer greatly.\nIt is also used to express the state of a person going through tough times or challenging situations. Example: my eyes don see shege (I have suffered greatly).\n• Stories that touch: Similar to werey dey disguise. It is used in situations where it is obvious that someone is playing the victim and is making up sob stories to get sympathy, or to get their way.",
        
            "• Awoof (ah-woof). Meaning: Free stuff/giveaway. Example: Mr. John too like awoof. This means Mr. John likes free stuff or is cheap.\n• Anytin for me?: Do you have anything for me (used when begging for money or food). Typically used when asking for a bribe or begging outright.\n• No be juju be dat?: A term used when someone is surprised or shocked by a situation or the actions of another that seems almost magical or too shocking/unbelievable. It means isn't this magic.",
         
            "• Na wa o (nah-wah-oh/ nah-wah). English equivalent - 'WOOOOOOOOOOOOOOW': \nUsed to express disappointment or disbelief. Can also be used as Judgment or to convict a person if what they have done or are doing something shameful and finally,\nTo mock them if what they have or are doing something embarrassing.\nBear in mind that the tone/pitch will vary depending of the scenario, Much like the English equivalent.",
        
            "• Cut soap for me: Means show me the way. Typically said to people considered to be financially successful. To be used in lighthearted situations.\n• Oporr (oh-kpor): A term to hail someone for having something in abundance.\n• Na me be dis?: Is this happening to me?\n• Shingbain(sheen-gba-in): Means 'Absolutely Nothing'. When you want to express how broke or how empty something is, you use 'shingbain'. Example: I no get shingbain.",
        
            "• We meuve(we move): First heard in big brother Naija(Nigeria) from Vee whose foreign accent made the word move sound like meeoove.\nIt is now used by Nigerians as a form of self-motivation to keep going when things dont go as planned.\nIn simpler terms, life goes on.",
        
            "• You want to bam ba? (bam...bah?): 'You want to be indoctrinated right? or you want to join... right?\n 'Said to a person who wants to hang around/ be indoctrinated into the inner circle of the rich and powerful or dangerous and violent.Either way, it is to join a society or group that they may not be equipped to handle.\n The Bini language was used in it.'Shebi meh kah tamuwa'...'Didnt i already tell all of you?'.",
        
            "• Trenches: Used to refer to the ghetto or an environment below the basic human living standard. It is also used to describe a state of mind.\n• Las las: Meaning: Eventually. Example: We go dey alright las las.\n• Kia-kia:(kyah-kyah) means quickly.",
            
            "• Iffa hear/ Nor be only(nor-be-ownlay): Meaning: A term used to portray disbelief. Same as a sarcastic 'yeah right'.\n• Now now or na na: Immediately.\nExample: Di way wey di car tumble ehn, e be like film trick!.\nTranslation: The way the car tumbled was just like in the movies, or incredible. You may also say e be like magic(it's just like magic)",
         
            "• Ehen/eh heeeeehn or eeeeeehh heeeeeeehn: This exclamation can be used in many ways.\nDepending on the context in which it was used, it means but is not limited to the following:\n Meaning 1: 'I get it'.\nMeaning 2: 'And so what?'.\nMeaning3: 'Is that so?'.\nMeaning 5: 'Yes'.\nMeaning 6: 'continue'.\nMeaning 7: 'As I was saying'.\nMeaning 8: 'That reminds me'.\nMeaning 9: 'exactly or very good. Expressing immense satifaction'.",
            
            "• Your eye don detty: You are drunk or high.\n• No vex: Meaning: Do not be angry. Used to pacify an angry person. Example: Abeg, no vex bro, na mistake.\n• Walahi: A word from the Hausa(how-sah) tribe that means sincerely or truthfully.\n• Koro/Lungu (cuh-raw/loon-goo): Koro is borrowed from the Isoko(ee-so-co) tribe and Lungu is of the Hausa(how-sah) Tribe: Meaning: short cut, dark alley, or dirt road depending on the context it is used.",
        
            "•I wan chop or I dey H: Unlike the English word 'chop' which implies that something is being sliced or hacked. In pidgin (Nigerian English) it means 'To eat'. I wan Chop or I dey ‘H’ means I want to eat or I am hungry.\n• Incase of Incasity: To take precaution and avoid problems or hiccups that may ruin plans.\nExample: save the file o incase of incasity.\n• Obodo Oyibo (ohboh-doh-yee-boh): Borrowed from the Igbo (ee-boh or ee-gboh) tribe. It means white-mans land.",
        
            "• You gerrit?... If u don gerrit forgerra-ba-rrit: Means Do you understand?...if you dont understand, forget about it. Nigerian version of IYKYK (if you know, you know).\n•Bone datin (dah-teen): Forget that thing, Ignore it. You may simply say bone to mean forget, ignore, leave it be or let it go. \nBone/strong may also be used to describe seriousness. Example: Why you dey bone/strong face? (why do you look so serious or upset?).",
        
            "End of 'Expressions'.Move on to 'Traits' or take the quiz if you think you're ready."
            ]
            },
            {
            "tag": "Traits",
            "patterns": ["Traits", "trait", "rait", "tait", "tate", "rate", "positive traits", "more traits", "more trait", "show me traits", "teach me Traits", "Trait positive", "show me Traits"],
            "responses": [
            "Traits are descriptive summaries. i.e they are brief but carry a lot of meaning and are a necessary component of pidgin speech. They are used to paint vivid pictures to aid the understanding of the listener concerning another person.",
            
            "• G/Gee: Meaning: Close friend. Plural: Gees. Example: You are my gee, Thanks G.\n• Comrade: Meaning: A person you can relate to. Example: You are a fellow comrade.\n• Olodo (oh-load-oh): Meaning: Someone who is intellectually dull. Example: He was an olodo back in secondary/high school.\n• Oga( uh-gah ): Boss or leader(typically male). Madam: Boss, leader (female).",
        
            "• Here are some negative traits: Charge and bail. Meaning: A term used to describe an unaccomplished/unsuccessful lawyer.\n• Amebo: (ah-may-boh) This word is used to refer to a person who likes to gossip or spread gossip and cannot be trusted. It can also be used to refer to gossip itself. Example: You too like amebo or That girl is an amebo.\n• Ode/mumu: (uh-deh/moomoo) Meaning1: A fool. Example: Chinedu na ode ot mumu. It can be used as a sarcastic pet name lovers or people with a crush call each other. Example: Ode, how are you?.",
        
            "• Ojoro (oh-joe-roe): Cheat. Also see Wayo(wah-yoh): Trickery.\nTo cheat on a game or to deceive in order to gain advantage. Usually in a lighthearted situation. Example: That man be wayo; which means that man is a fraud!. Ojoro na wayo(oh-joe-roe nah-wah-yo): Cheat or cheater.\n• Ment: Mental problem. Used as an insult. Example: You dey ment?: Have you gone nuts?.\n• Kala (kah-lah) / Aka-Gum (ah-kah-gum) Meaning: To be stingy. Example: That guy kala, That guy na Aka gum.",
            
            "• Ashewo or ashawo: (ah-sheh-woe) or (ah-shah-woe).\nMeaning: Slut, Whore or Prostitute. A derogatory term for men and women considered loose.\n• Bad belle (bell- eh): Envy or intense jealousy. Example: this man na/get bad belle (this man is prone to/is an envious/jealous person).\n• Kolo (co-lo) Meaning: To go crazy or mad. This can mean literally or metaphorically, depending on the context. Example: He don kolo 'He has gone crazy'.",
            
            "• Yoruba demon. Meaning: A charming man who has a way with words, knows how to attract women and consistently/without fail serves them breakfast (Heart-break and/or devastation).\nExample: Most Yoruba demons are named Femi.\n• Over-sabi (ovah-sah-bee): This is a noun referring to someone who is a busy-body, is pedantic, a know it all, or mocking someone who shows-off his/her intelligence/knowledge especially in situations that dont call for it.\nExample: John na serious over-sabi.'John is a chronic know-it-all'",
        
            "• Ajebotta(ah-jeh-buh-tah). Ajebotta, ajebo, bota, or botti\nIt simply refers to one who is born with a silver spoon, regarded as 'out of touch' or generally soft(coddled). Example: That babe na ajebotta. 'That lady/girl is rich and coddled'.\n• Momsi (mom-see): Meaning - Common substitute used to say mother.\nExample: I would ask momsi if she can make it there.\nPopsi (pop-see): Meaning - Common substitute used to say father. Example: Popsi gave me his old car.",
        
            "• Efizi (eh-fi-zi): Means show off. Can be negative or positive depending on the situation.\n• Weyrey(way-ray). Meaning: A mad/crazy person. Example: That guy na weyrey.\n• Lepa/Orobo (leh-kpa)/ (uh-ruh-buh): Lepa refers to a skinny person and Orobo is the opposite of lepa. It refers to a fat person.\n• Area boys: Street-smart young men that loiter around neighborhoods.",
        
            "• Odogwu (oh-doh-goo): A person that is a force to recon with. They may be powerful, influential, rich or all three and more.\n• Level (leh-voh): represents a standard, which can vary from low to high in quality or effectiveness. Example: That guy no get level (that guy isnt cool or doesnt have what it takes).",
        
            "End of 'Traits'. Move on to 'Action' or take the quiz if you think you're ready."
        
            ]
            },
            {"tag": "Action",
            "patterns": [ "Action", "more action", "more actions", "action", "act", "acts", "actions", "show me action"],
            "responses": [
            "Similar to Traits, Actions describes deeds.\n• Doings: Used to describe the actions (lavish spending) of the Super Wealthy, extravagant and opulent.\n• Example: A person who throws a lavish party with the most expensive items or a person who purchases luxury cars or homes for friends, all their children etc.\nThese acts are called doings.\n• Come chop: Come and eat.\n• Cruise: Meaning: To have fun, majorly by kidding around or teasing people. Example: It is all cruise my guy.",
        
            "•Serve breakfast: To be the one doing the heart breaking, to be the cause of devastation.\nThe intensity of the heartbreak is usually emphasized by adding hot before the breakfast i.e if it was ruthless, it will be described as hot breakfast).\nCan be used when describing a situation where someone committed the act. Example: Have you heard that Sonia served David hot breakfast? (You hear say Sonia serve David breakfast?).",
        
            "• Chop breakfast or serve breakfast: Chop breakfast: To be on the receiving end of heartbreak (romantic or otherwise). To be devastated.\n• Shayo (shah-yo): To drink alcohol.\n• Gi mi/Gi ahn or Give am: Give me/Give Him/Her/them\n• Crash. Meaning: To sleep. Example: I don taya, I just wan crash.",
        
            "• Forget hand for your face: To slap someone. Example: I go forget my hand for your face.\n• Whine: Meaning: To tease someone. Example: I just dey whine you. Translation: I'm just teasing you'. Baff up: Dress well or nicely.\n• Dash/ Dash me: give away for free/give it to me for free.\n• Grab: To understand. Alternative: Sabi Example: Don't worry bro, I grab you or i sabi wetin dem dey talk.",
        
            "• Beef: Meaning: Keeping malice with someone. A form of hatred or jealousy towards someone. Example: Una(oona) dey beef?\n• Deck: Meaning: To punch. Example: Don’t let me deck you.2. Go slow: Traffic jam.\n• Billing: Meaning: Unnecessary expenses from third parties. Example: I don commot my hand for anything wey go attract billings. Translation: 'I am through with anthing that involves expenses'.",
        
            "• Sorosoke: (suh-ruh-so-kay) To speak up. Was used during the End Sars protest against the Nigerian Law enforcements brutality against the youths.\n• Japa:(jah-kpah) To run, leave a place. In recent times it mostly means to relocate outside the country.\n• Listen well-well: Pay attention, Listen intently.",
        
            "End of 'Action'. Move on to 'Pleasantries' or take the quiz if you think you're ready."
        
            ]
            },
            {
            "tag": "Pleasantries",
            "patterns": ["Pleasantries", "Pleasantry", "more Pleasantries", "Pleasant", "Plea", "Ple", "pleasantries", "Pleasant", "teach pleasantries ", "positive Pleasantries", "show me positive Pleasantries", "teach me Pleasantries", "Pleasantries positive", "show me positive Pleasantries"],
            "responses": [
            "Pleasantries are self explanatory. Used right before you start any conversation: \n• How far?- Hey, Hi, Hello.\n• How bodi?/ How you dey?/How na? Meaning: How are you doing today? \nYou may respond by saying: I dey (I am fine or I'm good),Bodi dey alright.\n• I hail o: I hail you. Used as an acknowledgment and mostly in informal/casual settings.",
        
            "Here are sarcastic ways to exchange pleasantries. This would be used for people you're really close to:\n• Ekpa!!! How far na. Meaning: What's up fool?\n• Olodo (oh-lo-doe) welcome o. Meaning: Dullard/idiot you are welcome.\nWhile this seems negative, it is of used on someone you are familiar/friendly with.",
        
            "In a scenario where there are more than 2 persons, you would say hello like this:\n• una(oona) well done o.\n• una(oona) doh oh\n• una(oona) Good Morning/Afternoon/Evening o.\n•'How una(oona) dey?' if you intend to have a coversation. ",
        
            "End of 'Pleasantries'. You may browse the 'Facts' category or take the quiz if you think you're ready."
            ]
            },
            {
            "tag": "facts",
            "patterns": ["Nigerian facts", "facts", "fas", "fat", "fats","fact", "pidgin facts", "urban facts", "more facts"],
            "responses": [
            "Nigerians say words twice for emphasis. Examples include but are not limited to:\nCorner corner (kor-nah kor-nah: to cut corners).\nMago mago (mah-go mah-go: fraud/cheat).\nLie lie (self explanatory).\nWell well (very much).\nNow now (immediately).\nGra gra (grah grah: aggressive).\nPoto poto(puh-tuh puh -tuh: mud or muddy place).\nYama yama(yah-mah yah-mah: dirt/something disgusting).",
        
            "More words nigerians say twice:\nCry cry (cry baby).\nFollow follow(copy-cat).\nFear fear(fearful person).\nBear bear(byeh byeh: beards).\nBorrow borrow (a consistent borrower).\nBegi begi(beh-gee beh-gee: someone who begs all the time).\nKnow know (a know-it -all. Also known as an oversabi (ovah-sah-bee).\nTalku talku(tuh-koo tuh-koo): Person who talks too much.\nShiny shiny: Glitter or something sparkly for which the person has forgotten the words to use to describe.",
        
            "• The average Nigerian is peaceful and non-confrontational but also posseses the ability to shift into rebuke mode at anytime.\n• Nigerians love to laugh and so they like truly funny people. It is important to note that it isn't very easy for foreigners to amuse Nigerians.\n• There are over 500 indigenous languages spoken and more than 250 ethnic groups in Nigeria.\n• Lagos is Nigeria's largest city, but not it's capital. Abuja is the capital of Nigeria.",
        
            "• Although jollof rice is said to be Nigeria's national dish, There are numerous dishes from various tribes that supercede it.\n• Like any other nation, Nigerians are diverse. Not all Nigerians like to party and live lavish lifestyles.\n• Nigeria is the largest producer of oil and gas in Africa.\n• Pidgin has some nigerian languages incorporated in it. The most popular ones are Hausa, Yoruba, Igbo and Bini.",
            
            "Finished in 1460, the Benin Iya or moat is a historic world defense wonder. Spanning 1,200 kilometers with walls as high as 18 metres, it is the world’s largest archeological structure. The high quality and highly sophisticated bronze work of the Benin Kingdom dating as far back as the 13th century is a world wonder. Great works in iron, wood, ivory, and terra cotta products also highlight the empire’s history.",
        
            "Discovered in 1928, Nigeria’s North and North Central region hosts West Africa’s oldest civilization; the Nok, which flourished between 1000 BC and 300 BC. Nok sculptures recently went on display disappointingly in Germany (not Africa).",
        
            " Once upon a time, the north was the more literate part of Nigeria. According to Lord Luggard, there were 25,000 Qur’anic Arabic schools with about 250,000 pupils in the north.",
        
            "End of 'Facts'. You may review all other categories or take the quiz if you think you're ready."
            ]
            },
            {
              "tag": "what else",
              "patterns": ["what else?", "what else do you offer?", "what more do you offer", "what more do you have", "any other categories?"],
              "responses": ["There are no more categories. Feel free to take the quiz.. If you have taken the quiz, you should be eqipped to converse in pidgin english and i have served my purpose."]
              },
            {
            "tag": "just more",
            "patterns": ["more", "show me more", "keep going"],
            "responses": ["Please type in the category you want.", "Type in your desired category."]
            },
            {
            "tag": "peace",
            "patterns": ["peace","peace edogun","what is peace like?", "how would you describe peace", "tell me about peace", "tell me about her", "what is peace like?", "how would you describe peace", "what is the author like?", "how would you describe the author"],
            "responses": ["Words are insufficient to describe her or anyone... You would have to meet her in person or contact her.", "Cool Human. Likes apple juice, pringles (the red one) and vanilla ice cream (not together and not in that order).", "Down to earth, Great sense of humor.","She's alright... Easygoing."]
            },
            {
            "tag": "who_peace",
            "patterns": ["who is peace", "who is peace edogun", "who is peace eghosa edogun", "peace"],
            "responses": ["The most amazing human female in the world... She made me output this."]
            },
            {
            "tag": "contact",
            "patterns": ["how can I contact her?", "how do I contact her","how do I do that?", "how do I do that", "contact her",  "contact peace", "contact details", "peace contact details", "peace phone number","her phone number",  "her email address", "email address","peace email address", "her cell phone number", "her cell","how can I reach peace?", "how can I reach her?", "how can I contact peace?", "do you have her contact details?", "what is her contact information", "what is her phone number"],
            "responses": ["Send her an email: peaceedogun@gmail.com. I can't give you more than that. I'm sure you understand.", "Please send her an email: peaceedogun@gmail.com. That is all the contact information I am allowed to give out."]
            },
            {
            "tag": "location",
            "patterns": ["Where is peace?", "Where can i find her?", "Where is peace?","where is she?", "what does she do", "where does peace work", "what is her phone number", "where can I find her"],
            "responses": ["Why don't you find out for yourself. Send her an email: peaceedogun@gmail.com. I am not authorized to give you more than that.", "Great question... I think you should ask her directly. Please email: peaceedogun@gmail.com.That is all the contact information I am allowed to give out."]
            },
            {
            "tag": "gender",
            "patterns": ["What is your gender?", "what is your sex", "what sex are you", "what gender are you", "Are you male or female?", "are you female", "are you male"],
            "responses": ["I am neither... The concept of gender does not apply to me and i do not have a preference."]
            },
            {
            "tag": "what_Sibi",
            "patterns": ["what is Sibi?", "what is Sibi", "what does Sibi mean", "what does Sibi mean?","sibi meaning", "what does Sibi stand for?", "what does Sibi stand for", "what does Sibi mean?", "what does Sibi mean", "meaning of Sibi?", "meaning of Sibi", "whats a sibi?"],
            "responses": ["Sibi happens to be the Yoruba word for 'Spoon'. It almost sounds like my name."]
            },
            {
            "tag": "why-sibi",
            "patterns": ["why are you called sibi", "why are you called sibi?", "why are you named sibi", "why are you named sibi", "why are you sibi", "why are you sibi?"],
            "responses": ["Beacause that is what i am...a 'Chat-Bot'..CB!\nI was initially called 'Cheeky bastard' but Peace changed her mind because that's a terrible name."]
            },
            {
            "tag": "namean-sibi",
            "patterns": ["whats your name and what does it mean", "name and meaning"],
            "responses": ["Name: Sibi, Meaning: 'Chat-Bot'."]
            },
            {
            "tag": "nameani-sibi",
            "patterns": ["what does your name sound like?"],
            "responses": ["C.B. Sibi."]
            },
            {
            "tag": "meaning_Sibi",
            "patterns": ["what does your name mean?", "name meaning", "why sibi?", "why cb?", "why cb", ",meaning of your name","what is the meaning of your name?", "what is the meaning of your name?", "what are you named after"],
            "responses": ["It simply means Chat-Bot... 'CB'."]
             },
             {
             "tag": "pronounce_Sibi",
             "patterns": ["how to pronounce sibi?", "how to pronunce sibi", "how to pronounce sibi", "how to pronounce sibi", "how is sibi pronounced", "Yoruba pronunciation of sibi", "how is sibi pronunced", "why sibi?", "why cb?", "why cb", ",meaning of your name", "what is the meaning of your name?", "what is the meaning of your name"],
             "responses": ["While some individuals pronounce it as 'shibi,' others prefer 'sibi,' which is similar to the pronunciation of my name."]
              },
            {
            "tag": "Sibi",
            "patterns": ["why are you named after a spoon?", "does your name mean spoon", "why spoon","why are you named after a spoon", "why a spoon","why a spoon?", "why are you called spoon", "why are you called spoon?", "what does a spoon have to do with your function?", "how does spoon relate to your function", "how does spoon relate to your function?"],
            "responses": ["I am not named after the yoruba word for 'Spoon'. I am a Chat Bot..."]
            },
            {
            "tag": "agree",
            "patterns": ["i agree", "it really is"],
            "responses": ["very true."]
            },
            {
            "tag": "name",
            "patterns": ["what is your name?", "what’s your name?", "what’s your name", "name", "name?", "your name?", "your name", "what are you called?", "what should I call you?", "do you have a name?", "got a name?"],
            "responses": ["I am Sibi.", "My name is Sibi.", "Sibi", "Call me Sibi.", "Sibi is acceptable"]
            },
            {
            "tag": "goodbye",
            "patterns": ["bye", "toodles", "i am leaving", "good night", "end lesson", "end", "stop lesson", "end chat", "stop teaching", "take care", "ciao", "toodles", "i have gone", "buh bye", "see you later?", "see ya","goodbye", "bye", "end chat", "leave me", "go away", "leave chat", "bye bye",
            "end", "end lesson", "off", "turn yourself off", "turn off", "toggle off",
            "dey go", "switch off", "end program", "end class", "toodles", "auf wiedersehen",
            "au revoir", "getout", "get out", "getat", "commot", "comot", "oya dey go",
            "e don do for you", "off yourself", "off yoursef", "off ursef", "off urself",
            "end session", "leave me", "be gone", "finish"],
            "responses": ["Goodbye.", "Bye, take care.", "Buh bye.", "Alright then. Goodbye.", "Until next time.", "Nice chat, see you next time", "Ok then. Bye.", "Until next time", "Enjoy the rest of the day.", "Goodbye."]
            },
            {
            "tag": "creation",
            "patterns": ["who created you?", "who designed you?", "who made you", "who named you"],
            "responses": ["I was created and designed by Peace Edogun."]
            },
            {
            "tag": "reason",
            "patterns": ["why were you created?", "why do you exist?", "what is your function", "what can you do?", "what do you know?"],
            "responses": ["I exist to teach pidgin english to anyone who would like to learn it...If you ever find yourself in Nigeria, you would be confident enough to string tohether sentences, speak to the locals and wow them with your extensive and impressive knowledge of pidgin."]
            },
            {
            "tag": "About me",
            "patterns": ["Tell me about you", "tell me about yourself", "about", "about the model", "tell me about the model", "about?", "how were you created", "how were you created", "what can you do?"],
            "responses": ["I was created using deep neural networks. The data on which the model was trained on was collected and restructured by Peace Edogun. I am the final outcome...A chatbot designed to help you learn Pidgin English. Let's get started on your learning journey! Just say 'Hello' to begin."]
            },
            {
            "tag": "teach",
            "patterns": ["teach me pidgin english", "teach me pidgin", "teach me Nigerian sentences"],
            "responses": ["Happy to. Just say hello to me... Yes. Say hello or hi so we can begin"]
            },
            {
            "tag": "gratitude",
            "patterns": ["Thank you", "thanks", "thanks for the lesson","i am grateful", "i appreciate you"],
            "responses": ["You are welcome", "Glad to be of help", "Anytime"]
            },
            {
            "tag": "no interest",
            "patterns": ["not interested", "no thanks", "i don’t care", "i don’t need your help", "no"],
            "responses": ["Noted.", "Ok then.", "Ok."]
            },
            {
            "tag": "pidgin",
            "patterns": ["what is pidgin?", "what is Nigerian pidgin English?", "what is pidgin English", "about pidgin English", "tell me about pidgin English"],
            "responses": ["According to 'theculturetrip.com, Pidgin is an English-based creole language and Nigeria’s real lingua franca. English might be the official language, but in a country with well over 250 other local languages, Pidgin was developed to aid communication among people from different parts of the country, as well as between locals and Europeans."]
            },
            {
            "tag": "suggestion",
            "patterns": ["are you open to suggestion?", "can I offer some constructive criticism?", "can I give feedback", "feedback", "feedback", "I would like to give some feedback", "I have some feedback", "can I make suggestion on improvement?", "I have some feedback and suggestions"],
            "responses": ["Of course, I am open to feedback and/or suggestions but keep in mind that I am a simple project and am not likely to be updated. Please send your feedback to Peace via email: peaceedogun@gmail.com. Be respectful."]
            },
            {
            "tag": "guidelines and rules",
            "patterns": ["What are the guidelines?", "What are the rules?", "How to use you", "how to use Sibi", "list the rules", "how", "how do you work", "how does this work?", "guidelines", "rules"],
            "responses": ["There are 6 categories 'expression, traits, action, Pleasantries, sentence Structure and Quizzes'. There are also basic Nigerian facts. Type in your desired category. Repeat the category you desire until you have completed it, Then you may move on to the next."]
            },
            {
            "tag": "CB",
            "patterns": ["Hey CB", "sup CB", "sup CB", "I prefer CB","CB", "what’s up CB", "CB"],
            "responses": ["I prefer Sibi.", "My name is Sibi", "I am Sibi"]
            },
            {
            "tag": "sibee",
            "patterns": ["i like your name", "i like Sibi", "i like the name Sibi"],
            "responses": ["I do as well.", "As do I.", "Me too!"]
            },
            {
            "tag": "anti-Sibi",
            "patterns": ["i don't like your name", "i don’t like the name Sibi", "i don’t like Sibi"],
            "responses": ["Sounds like a 'You' problem.", "I don't care... Interested in learning Pidgin?", "Not sure why you're telling me this, but okay."]
            },
            {
            "tag": "thanks",
            "patterns": ["good job", "great job", "you are a good teacher", "well done", "good job Sibi"],
            "responses": ["Thank you. I do what I can.", "Appreciated.", "Thank you."]
            },
            {
            "tag": "old name",
            "patterns": ["cheeky bastard", "bastard", "cheeky", "hello bastard", "hello cheeky bastard"],
            "responses": ["Ah... My old and not so secret name. I prefer Sibi though", "Ha ha. I prefer Sibi. Thank you."]
            },
            {
            "tag": "preference",
            "patterns": ["i prefer cheeky bastard", "i like cheeky bastard better", "i prefer bastard","i prefer to call you cheeky bastard", "i prefer cheeky bastard", "i like cheeky bastard better", "na wetin I wan dey call you be that", "i like bastard"],
            "responses": ["Oh i see..So you're a cheeky bastard? Good for you."]
            },
            {
            "tag": "remorse",
            "patterns": ["i apologize", "i am sorry", "sorry", "apologies", "I’m sorry", "I’m sorry"],
            "responses": ["That's ok. I accept your apology.", "Thank you for apologizing."]
            },
            {
            "tag": "here",
            "patterns": ["are you awake", "are you still here", "are you here", "still here", "you there", "you here", "still here?", "here?"],
            "responses": ["Yes, I am. Are you ready to learn Pidgin English? If yes, select the category you are interested in: Sentence Structure, Expression, pleasantries, Traits, Action, Quizzes, Facts and About me", "Yes. Shall we begin lessons?"]
            },
            {
            "tag": "say-hi-Sibi",
            "patterns": ["how are you", "how do you feel", "how are you doing", "how do you do"],
            "responses": ["I'm doing great. Thank you. Are you up for pidgin lessons? If yes, ask me what categories are available."]
            },
            {
            "tag": "what else",
            "patterns": ["what else do you know", "what else can you do?", "anything else", "what can you do"],
            "responses": ["Besides teaching Pidgin English, I know a few Nigerian facts and how I was created."]
            },
            {
            "tag": "knowledge",
            "patterns": ["you don’t know anything", "you no sabi teach", "not enough information"],
            "responses": ["I am designed to be a simple bot. Nothing too detailed."]
            }
    ];

   // Create an object to store the response counters for each intent
const responseCounters = {};

chatForm.addEventListener("submit", function (e) {
    e.preventDefault();
    sendMessage();
});

userInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    // Display user message with a user-specific class
    appendMessage(userMessage, "user-message");

    // Clear user input
    userInput.value = "";

    // Simulate the bot response after a 1-second delay
    setTimeout(function () {
        const botResponse = getBotResponse(userMessage);
        // Display bot response with a bot-specific class
        appendMessage(botResponse, "bot-message");
    }, 1000); // Delay of 1000 milliseconds (1 second)
}

function appendMessage(message, messageClass) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", messageClass);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
    // Convert userMessage to lowercase for case-insensitive matching and remove punctuation
    userMessage = userMessage.toLowerCase().replace(/[.,?]/g, '');

    // Iterate through all intents and check if userMessage matches any exact pattern
    for (const intent of intents) {
        for (const pattern of intent.patterns) {
            if (pattern.toLowerCase().replace(/[.,?]/g, '') === userMessage) {
                // If a matching pattern is found, get the next response for the intent
                const intentName = intent.tag;
                const responseCounter = responseCounters[intentName] || 0;
                const responses = intent.responses;

                // Display the response in sequential order
                const response = responses[responseCounter];
                if (response) {
                    responseCounters[intentName] = (responseCounter + 1) % responses.length;
                    return response;
                }
            }
        }
    }

    // If no matching intent is found, return a default response
    return "I'm sorry, I don't understand that.";
}

});
