import React, { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import * as Survey from 'survey-react';
import * as widgets from "surveyjs-widgets";
import "../index.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/dist/nouislider.css";

widgets.nouislider(Survey);

export interface ISurveyProps {
    css: any;
    json: any;
    data: any;
    onComplete: (survey: any, options: any) => void;
    onPartialSend: (survey: any) => void;
    showPreviewBeforeComplete: any;
    sendResultOnPageNext: any;
}

const SurveyComponent: React.FunctionComponent<ISurveyProps> = props => {
    const { css, data, json, onComplete, onPartialSend, showPreviewBeforeComplete, sendResultOnPageNext } = props;

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        Survey.StylesManager.applyTheme("bootstrap");
        
        setLoading(false);
    }, []);

    if (loading) return <Spinner />;

    return (
        <Survey.Survey
            css={css}
            data={data}
            json={json}
            onComplete={onComplete}
            onPartialSend={onPartialSend}
            showPreviewBeforeComplete={showPreviewBeforeComplete}
            sendResultOnPageNext={sendResultOnPageNext}
        />
    );
}

export default SurveyComponent;