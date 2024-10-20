import { IntroIcon } from '@/assets/IntroIcon';
import { WeekIcon } from '@/assets/WeekIcon/WeekIcon';
import { MeditateIcon } from '@/assets/MeditateIcon';

interface NodeDictionary {
    [key: number]: React.ReactNode;
}

export const iconsDictionary: NodeDictionary = {
    0: <IntroIcon height={'56px'} width={'56px'} />,
    1: <WeekIcon height={'56px'} width={'56px'} />,
    2: <IntroIcon height={'56px'} width={'56px'} />,
    3: <MeditateIcon height={'56px'} width={'56px'} />,
};
