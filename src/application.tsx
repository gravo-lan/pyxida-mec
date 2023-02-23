import React from 'react';
import { Card, CardBody, Container} from 'reactstrap';
import SurveyComponent from './components/survey';
import defaultSurveyConfig from './config/survey';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = props => {

    return (
        <>
            <Container>
                <Card className="mt-1">
                    <CardBody>
                        <SurveyComponent 
                            css={defaultSurveyConfig.defaultSurveyCSS}
                            data={defaultSurveyConfig.defaultSurveyDATA}
                            json={defaultSurveyConfig.defaultSurveyJSON}
                            onComplete={(survey: any) => {
                                console.log(survey.data);
                            }}
                        />
                    </CardBody>
                </Card>
            </Container>
        </>
    );
}

export default Application;