import Button from '@/components/Button';
import TopBar from '@/components/TopBar';
import NavBar from '@/components/NavBar';

const HomeScreen = () => {
    return (
        <div >
            <TopBar amtNotifications={5} />
            <Button variant="red" size="medium">
                Click me!
            </Button>
            <Button variant="red" size="large">
                Click me!
            </Button>
            <Button variant="red" size="small">
                Click me!
            </Button>
            <NavBar value={0}/>
        </div>
    );
};

export default HomeScreen;
