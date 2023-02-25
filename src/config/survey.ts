const defaultSurveyJSON = {
    "title": "Pyxida Survey",
    "logoPosition": "right",
    "pages": [
        {
        "name": "page1",
        "elements": [
        {
            "type": "text",
            "name": "question1",
            "title": "How old are you?",
            "isRequired": true,
            "validators": [
            {
            "type": "numeric",
            "text": "User cannot be less than 11 years old or more than 26 years old. ",
            "minValue": 11,
            "maxValue": 26
            }
            ]
        },
        {
            "type": "rating",
            "name": "question2",
            "title": "How much do you care about the reputation of your community college? (1 for very little, 5 for a lot)",
            "isRequired": true
        },
        {
            "type": "rating",
            "name": "question4",
            "title": "What is your current financial situation?",
            "isRequired": true
        },
        {
            "type": "radiogroup",
            "name": "question3",
            "title": "What would be your estimated amount of financial aid needed?",
            "isRequired": true,
            "choices": [
            {
            "value": "Item 1",
            "text": "1-25%"
            },
            {
            "value": "Item 2",
            "text": "26-50%"
            },
            {
            "value": "Item 3",
            "text": "51-75%"
            },
            {
            "value": "Item 4",
            "text": "76-100%"
            },
            {
            "value": "Item 5",
            "text": "I don't need financial aid"
            }
            ]
        },
        {
            "type": "radiogroup",
            "name": "question5",
            "title": "Are you a domestic or international student?",
            "isRequired": true,
            "choices": [
            {
            "value": "Item 1",
            "text": "Domestic"
            },
            {
            "value": "Item 2",
            "text": "International"
            }
            ]
        },
        {
            "type": "dropdown",
            "name": "question5.1",
            "visible": false,
            "visibleIf": "{question5} = 'Item 1'",
            "title": "Which state do you live in?",
            "isRequired": true,
            "choices": [
            "Item 1",
            "Item 2",
            "Item 3"
            ]
        },
        {
            "type": "boolean",
            "name": "question5.2",
            "visible": false,
            "visibleIf": "{question5} = 'Item 1'",
            "title": "Are you a US-Citizen/Green Card holder?",
            "isRequired": true
        },
        {
            "type": "checkbox",
            "name": "question6",
            "title": "What is your ethnicity(s)?",
            "isRequired": true,
            "choices": [
            {
            "value": "Item 3",
            "text": "White"
            },
            {
            "value": "Item 5",
            "text": "Black or African American"
            },
            {
            "value": "Item 4",
            "text": "Asian"
            },
            {
            "value": "Item 6",
            "text": "Native American or Indigenous"
            },
            {
            "value": "Item 7",
            "text": "Pacific Islander"
            },
            {
            "value": "Item 8",
            "text": "Latino or Hispanic"
            },
            {
            "value": "Item 12",
            "text": "Other"
            },
            {
            "value": "Item 13",
            "text": "Rather not specify"
            }
            ]
        },
        {
            "type": "radiogroup",
            "name": "question7",
            "title": "What is your gender?",
            "isRequired": true,
            "choices": [
            {
            "value": "Item 1",
            "text": "Male"
            },
            {
            "value": "Item 2",
            "text": "Female"
            },
            {
            "value": "Item 4",
            "text": "Non-Binary"
            },
            {
            "value": "Item 3",
            "text": "Other"
            }
            ]
        },
        {
            "type": "radiogroup",
            "name": "question8",
            "title": "What is your religion?",
            "isRequired": true,
            "choices": [
            {
            "value": "Item 6",
            "text": "Christianity"
            },
            {
            "value": "Item 12",
            "text": "Islam"
            },
            {
            "value": "Item 13",
            "text": "Judaism"
            },
            {
            "value": "Item 14",
            "text": "Buddhism"
            },
            {
            "value": "Item 17",
            "text": "Pagan/Folk/Local religions"
            },
            {
            "value": "Item 18",
            "text": "Other"
            },
            {
            "value": "Item 19",
            "text": "Non-religious"
            }
            ]
        },
        {
            "type": "radiogroup",
            "name": "question9",
            "title": "How would you describe your political beliefs?",
            "isRequired": true,
            "choices": [
            {
            "value": "Item 1",
            "text": "Centre"
            },
            {
            "value": "Item 2",
            "text": "Left-Leaning"
            },
            {
            "value": "Item 3",
            "text": "Liberal"
            },
            {
            "value": "Item 4",
            "text": "Conservative"
            },
            {
            "value": "Item 5",
            "text": "Right-Leaning"
            },
            {
            "value": "Item 6",
            "text": "I do not involve in politics"
            },
            {
            "value": "Item 7",
            "text": "I prefer not to say"
            }
            ]
        },
        {
            "type": "radiogroup",
            "name": "question10",
            "title": "What is your sexual orientation?",
            "isRequired": true,
            "choices": [
            {
            "value": "Item 1",
            "text": "Heterosexual"
            },
            {
            "value": "Item 2",
            "text": "Homosexual"
            },
            {
            "value": "Item 3",
            "text": "Bisexual"
            },
            {
            "value": "Item 4",
            "text": "Others"
            },
            {
            "value": "Item 5",
            "text": "Rather not specify"
            }
            ]
        }
        ],
        "title": "Student Info",
        "description": "Basic Information About Student"
        },
        {
        "name": "page2",
        "elements": [
        {
            "type": "rating",
            "name": "question11",
            "title": "Do you enjoy school? (1 for strongly dislike, 5 for strongly like)",
            "isRequired": true
        },
        {
            "type": "rating",
            "name": "question12",
            "title": "Do you frequently complete your academic work on time?                            (1 for never, 5 for always)",
            "isRequired": true
        },
        {
            "type": "dropdown",
            "name": "question13",
            "title": "Which fields are you interested in and would like to pursue?",
            "isRequired": true,
            "choices": [
            "Item 1",
            "Item 2",
            "Item 3"
            ]
        },
        {
            "type": "dropdown",
            "name": "question14",
            "title": "What career field do you want to pursue after college?",
            "isRequired": true,
            "choices": [
            "Item 1",
            "Item 2",
            "Item 3"
            ]
        },
        {
            "type": "checkbox",
            "name": "question16",
            "visible": false,
            "title": "Where would you like to study? (State)",
            "isRequired": true,
            "showSelectAllItem": true
        },
        {
            "type": "checkbox",
            "name": "question17",
            "visible": false,
            "title": "Where would you like to study? (City)",
            "isRequired": true,
            "showSelectAllItem": true
        },
        {
            "type": "checkbox",
            "name": "question18",
            "visible": false,
            "title": "Where would you like to study? (Town)",
            "isRequired": true,
            "showSelectAllItem": true
        }
        ]
        },
        {
        "name": "page3",
        "elements": [
        {
            "type": "rating",
            "name": "question19",
            "title": "How would you like your social environment?                                                           (1 for Casual and Party Oriented, 5 for Academically Oriented)",
            "isRequired": true
        },
        {
            "type": "rating",
            "name": "question20",
            "title": "Do you prefer a more collaborative or a more competitive working environment? (1 for More Collaborative, 5 for More Competitive)",
            "isRequired": true
        },
        {
            "type": "rating",
            "name": "question21",
            "title": "Do you prefer lectures or discussions?                                                                            (1 for More Lectures, 5 for More Discussions)",
            "isRequired": true
        },
        {
            "type": "checkbox",
            "name": "question22",
            "title": "What is your most important purpose for being in college?",
            "isRequired": true,
            "choices": [
            {
            "value": "Item 1",
            "text": "Career Preparation"
            },
            {
            "value": "Item 2",
            "text": "Build Status"
            },
            {
            "value": "Item 3",
            "text": "Gain Knowledge in General"
            }
            ]
        },
        {
            "type": "boolean",
            "name": "question23",
            "title": "Are you planning to enter a specialized career in the future, and are you planning to use college to train for it?",
            "isRequired": true
        },
        {
            "type": "boolean",
            "name": "question24",
            "title": "Are study abroad opportunities important for you?",
            "isRequired": true
        },
        {
            "type": "rating",
            "name": "question25",
            "title": "Do you prefer a large or intimate student body environment?                     (1 for larger, 5 for more intimate)",
            "isRequired": true
        },
        {
            "type": "rating",
            "name": "question26",
            "title": "Do you prefer a more social environment or more private environment? (1 for more social, 5 for more private)",
            "isRequired": true
        },
        {
            "type": "boolean",
            "name": "question27",
            "title": "Are you planning to make leisure activities (parties, etc.) a big part of your college life?",
            "isRequired": true
        },
        {
            "type": "radiogroup",
            "name": "question28",
            "title": "Would you prefer dormitories or external housing?",
            "isRequired": true,
            "choices": [
            {
            "value": "Item 1",
            "text": "Dormitories"
            },
            {
            "value": "Item 2",
            "text": "External Housing"
            },
            {
            "value": "Item 3",
            "text": "Don't Care"
            }
            ]
        },
        {
            "type": "rating",
            "name": "question29",
            "title": "How much do you value campus food?                                                                           (1 for valuing least, 5 for valuing most)",
            "isRequired": true
        },
        {
            "type": "ranking",
            "name": "question30",
            "title": "Rank the following factors from most to least important to you:    (drag and drop)",
            "isRequired": true,
            "choices": [
            {
            "value": "Item 1",
            "text": "How well the school fits your academic interests"
            },
            {
            "value": "Item 2",
            "text": "Variety of courses and degrees that the college offers"
            },
            {
            "value": "Item 3",
            "text": "Campus culture and society"
            },
            {
            "value": "Item 4",
            "text": "Emphasis on career preparation"
            },
            {
            "value": "Item 5",
            "text": "Study abroad opportunities"
            },
            {
            "value": "Item 6",
            "text": "Socializing on campus"
            },
            {
            "value": "Item 7",
            "text": "Racial and gender diversity"
            },
            {
            "value": "Item 8",
            "text": "Leisure activities"
            },
            {
            "value": "Item 9",
            "text": "Co-curricular activities"
            },
            {
            "value": "Item 10",
            "text": "Frats and sororities"
            },
            {
            "value": "Item 11",
            "text": "Location"
            },
            {
            "value": "Item 12",
            "text": "Saving costs and finding financial benefits"
            }
            ]
        },
        {
            "type": "rating",
            "name": "question31",
            "title": "What would be the optimal student to teacher ratio for you?                       (1 for extremely high, 5 for extremely low)",
            "isRequired": true
        },
        {
            "type": "boolean",
            "name": "question32",
            "title": "Would you want to enter a frat or sorority (social organizations)?",
            "isRequired": true
        }
        ]
        },
        {
        "name": "page4",
        "elements": [
        {
            "type": "checkbox",
            "name": "question33",
            "title": "Which of the below do you prefer?",
            "isRequired": true,
            "choices": [
            {
            "value": "Item 1",
            "text": "Bachelor's degree"
            },
            {
            "value": "Item 2",
            "text": "Associates degree"
            }
            ]
        },
        {
            "type": "checkbox",
            "name": "question34",
            "title": "What co-curricular activities would you be interested in?",
            "isRequired": true,
            "choices": [
            {
            "value": "Item 1",
            "text": "Sports"
            },
            {
            "value": "Item 2",
            "text": "Music"
            },
            {
            "value": "Item 3",
            "text": "Art"
            },
            {
            "value": "Item 4",
            "text": "Others"
            }
            ]
        },
        {
            "type": "checkbox",
            "name": "question35",
            "title": "What sports do you play?",
            "isRequired": true,
            "choices": [
            "Item 1",
            "Item 2",
            "Item 3"
            ]
        },
        {
            "type": "boolean",
            "name": "question36",
            "title": "Would you want to be a part time undergraduate or full-time undergraduate?",
            "isRequired": true
        }
        ]
        }
    ]
}   

const defaultSurveyCSS = {
    header: 'bg-primary text-white p-3',
    body: 'bg-light',
    completedPage: 'p-3'
};

const defaultSurveyDATA = {
    //TODO
};

const defaultSurveyConfig = {
    defaultSurveyCSS,
    defaultSurveyDATA,
    defaultSurveyJSON
}

export default defaultSurveyConfig;