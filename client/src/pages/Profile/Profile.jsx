import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Landing/Footer";
import ProfileCard from "../../components/Profile/ProfileCard";
import userInfo from "../../constant/userInfo";

const Profile = () => {

    const user = userInfo;
    return (
        <>
            <Navbar />
            <main className="mt-16">
                <div className="max-w-[1200px] mx-auto p-4">
                    <ProfileCard user={user}/>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default Profile;