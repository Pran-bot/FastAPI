import ProfileIcon from "../../assets/profile_icon.jpeg"
const ProfileAvtar = () => {
    return (
        <>
            <div className="bg-white w-[200px] h-[200px] border-[3px] border-solid border-[#ff4d4d] object-cover">
                <img src={ProfileIcon}></img>
            </div>
        </>
    );
};
export default ProfileAvtar;