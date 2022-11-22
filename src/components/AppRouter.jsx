import {Route, Routes} from 'react-router-dom';

//AUTH LINKS
import {
    LoginPage,
    SignUpPage,
    StartPage,
    PassRecoveryPage,
} from "../pages";
// import { SignIn } from '../pages/SignIn';
// import {SignUp} from '../pages/SignUp';
// import {RestorePass} from '../pages/RestorePass';

//PROFILE LINKS
import {Profile} from '../pages/Profile';
import {ProfileIndex} from '../pages/ProfileIndex';
import {ChangePass} from '../pages/ChangePass';

//PANEL LINKS
import {Panel} from '../pages/Panel';
import {PanelIndex} from '../pages/PanelIndex';
import {AvailableQuests} from '../pages/AvailableQuests';
import {QuestProgress} from '../pages/QuestProgress';
import {UserQuests} from '../pages/UserQuests';
import {CreateQuest} from '../pages/CreateQuest';
import {CreateStep} from '../pages/CreateStep';
import {CreateStepIndex} from '../pages/CreateStepIndex';
import {CreateStepForm} from '../pages/CreateStepForm';
import { QuestProfile } from '../pages/QuestProfile';
import { TextQuestionStep } from '../pages/TextQuestionStep';


import {Header} from './Header/Header';


export const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Header/>}
            >
                <Route
                    index
                    element={<StartPage/>}
                />
                <Route
                    path="/signin"
                    element={<LoginPage/>}
                />
                <Route
                    path="/signup"
                    element={<SignUpPage/>}
                />
                <Route
                    path="/restore"
                    element={<PassRecoveryPage />}
                />
                <Route path="panel" element={<Panel/>}>
                    <Route
                        index
                        element={<PanelIndex/>}
                    />
                    <Route
                        path="available-quests"
                        element={<AvailableQuests/>}
                    />
                    <Route
                        path="my-progress"
                        element={<QuestProgress/>}
                    />
                    <Route
                        path="my-quests"
                        element={<UserQuests/>}
                    />
                    <Route
                        path="create-quest"
                        element={<CreateQuest/>}
                    />
                    <Route
                        path="quest-profile"
                        element={<QuestProfile/>}
                    />
                    <Route
                        path="create-quest/create-step"
                        element={<CreateStep/>}
                    >
                        <Route
                            index
                            element={<CreateStepIndex/>}
                        />
                        <Route
                            path=":step"
                            element={<CreateStepForm/>}
                        />
                        <Route
                            path="text-step"
                            element={<TextQuestionStep/>}
                        />
                    </Route>
                </Route>
                <Route path="profile" element={<Profile/>}>
                    <Route
                        index
                        element={<ProfileIndex/>}
                    />
                    <Route
                        path="change-password"
                        element={<ChangePass/>}
                    />
                </Route>
                <Route path="*" element={<h1>Ошибка 404</h1>}/>
            </Route>
        </Routes>
    );
};
