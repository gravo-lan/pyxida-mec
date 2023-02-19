const defaultSurveyJSON = {
    "title": "PYXIDA Survey",
    "logo": "https://api.surveyjs.io/private/Surveys/files?name=bdf16c7e-fa1e-4e31-9d82-a6df1982c224",
    "logoWidth": "200px",
    "logoHeight": "80px",
    "logoFit": "cover",
    "logoPosition": "right",
    "completedHtml": "<h3>Thank you for completing the survey</h3><div style=\"margin: 32px 0;\"><button class=\"rounded-button rounded-button--small\" onclick=\"reRunSurvey();\">Run Survey Again</button></div>",
    "completedHtmlOnCondition": [
     {
      "expression": "({age} == false)",
      "html": {
       "default": "Thanks for your feedback! We highly value all ideas and suggestions from our customers, whether they're positive or critical. In the future, our team might reach out to you to learn more about how we can further improve our product so that it exceeds your expectations.",
       "fr": "Merci pour vos commentaires! Nous accordons une grande importance à toutes les idées et suggestions de nos clients, qu'elles soient positives ou critiques. À l'avenir, notre équipe pourrait vous contacter pour en savoir plus sur la façon dont nous pouvons encore améliorer notre produit afin qu'il dépasse vos attentes."
      }
     },
     {
      "html": {
       "default": "Thanks for your feedback. Our goal is to create the best possible product, and your thoughts, ideas, and suggestions play a major role in helping us identify opportunities to improve.",
       "fr": "Merci pour vos commentaires. Notre objectif est de créer le meilleur produit possible, et vos réflexions, idées et suggestions jouent un rôle majeur pour nous aider à identifier les opportunités d'amélioration."
      }
     },
     {
      "html": {
       "default": "Thanks for your feedback. It's great to hear that you're a fan of our product. Your feedback helps us discover new opportunities to improve it and make sure you have the best possible experience.",
       "fr": "Merci pour vos commentaires. Nous sommes ravis d'entendre que vous avez apprécié notre produit. Vos commentaires nous aident à découvrir de nouvelles opportunités pour l'améliorer et vous assurer la meilleure expérience possible."
      }
     }
    ],
    "pages": [
     {
      "name": "rebuy",
      "elements": [
       {
        "type": "text",
        "name": "age",
        "title": {
         "default": "How old are you?",
         "fr": "Achèteriez-vous à nouveau notre produit?"
        },
        "isRequired": true,
        "inputType": "number",
        "min": 11,
        "max": 26
       },
       {
        "type": "dropdown",
        "name": "question1",
        "title": "Which fields are you interested in and would like to pursue?",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 2",
          "text": "TODO"
         }
        ]
       },
       {
        "type": "dropdown",
        "name": "question2",
        "title": "What career fields do you want to pursue after college?",
        "choices": [
         {
          "value": "Item 1",
          "text": "TODO"
         }
        ]
       }
      ]
     }
    ],
    "showPrevButton": false,
    "showQuestionNumbers": "off",
    "completeText": {
     "fr": "Envoyer"
    },
    "questionsOnPageMode": "questionPerPage",
    "widthMode": "static",
    "width": "1000px"
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