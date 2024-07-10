// App.js
import './App.css';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
    {
        id: '0',
        message: 'שלום גיק! (Hey Geek!)',
        trigger: '1',
    },
    {
        id: '1',
        message: 'אנא הכנס את שם המשתמש שלך (Please write your username)',
        trigger: '2'
    },
    {
        id: '2',
        user: true,
        trigger: '3',
    },
    {
        id: '3',
        message: " היי {previousValue}, איך אני יכול לעזור לך? (Hi {previousValue}, how can I help you?)",
        trigger: '4'
    },
    {
        id: '4',
        options: [
            { value: 1, label: 'הצג קורסים (View Courses)' },
            { value: 2, label: 'קרא מאמרים (Read Articles)' },
        ],
        end: true
    }
];

const theme = {
    background: 'white',
    headerBgColor: '#ff9933',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};

const config = {
    botAvatar: "img.png",
    floating: true,
};

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="צ'ט המכללה"
                    steps={steps}
                    {...config}
                    className="chatbot-container" // Apply the chatbot-container class
                />
            </ThemeProvider>
        </div>
    );
}

export default App;
