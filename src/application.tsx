import React from 'react';
import { Card, CardBody, Container} from 'reactstrap';
import SurveyComponent from './components/survey';
import defaultSurveyConfig from './config/survey';
import "./index.css";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = props => {

    var storageName = "survey_student_pyx";
    function saveSurveyData(survey) {
        var data = survey.data;
        data.pageNo = survey.currentPageNo;
        window.localStorage.setItem(storageName, JSON.stringify(data));
    }

    return (
        <>
            <Container>
                <Card className="mt-1">
                    <CardBody>
                        <SurveyComponent 
                            css={defaultSurveyConfig.defaultSurveyCSS}
                            data={defaultSurveyConfig.defaultSurveyDATA}
                            json={defaultSurveyConfig.defaultSurveyJSON}
                            onComplete={(sender: any, options:any) => {
                                console.log(JSON.stringify(sender.data),null,3);
                                saveSurveyData(sender);
                            }}
                            onPartialSend={(sender: any) => {
                                saveSurveyData(sender);
                            }}
                            showPreviewBeforeComplete="showAnsweredQuestions"
                            sendResultOnPageNext="true"
                        />
                    </CardBody>
                </Card>
            </Container>
        </>
    );
}

export default Application;