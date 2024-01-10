import { useState, PropsWithChildren } from "react";
import { View, Text } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import HomeStyles from "../styles/pages/HomeStyles";

interface ProfileText_int {
    countContent?: string,
    tittleContent?: string,
    username?: string,
    description?: string
}

const ProfileImage = ()=>{
    return (
        <View style={HomeStyles.profileImage_demo}></View>
    );
}

const ProfileCountWithText = ({ 
    countContent, tittleContent
}: ProfileText_int)=>{
    return (
        <View style={HomeStyles.profileNumbers}>
            <Text style={HomeStyles.profileCountContent}>
                {countContent}
            </Text>

            <Text style={HomeStyles.profileTittleContent}>
                {tittleContent}
            </Text>
        </View>
    );
}

const ProfileText = ({
    tittleContent, username, description
}: ProfileText_int)=>{
    return (
        <View>
            
            <Text style={HomeStyles.userTittle}>
                {tittleContent}
            </Text>
            
            <Text style={HomeStyles.userName}>
                {username}
            </Text>
            
            <Text style={HomeStyles.userDescription}>
                {description}
            </Text>
        </View>
    );
}

const StoryItem = ({tittleContent}: ProfileText_int)=>{
    return (
        <View>
            <View></View>
            <Text>{tittleContent}</Text>
        </View>
    );
}

const StoriesSection = ({ children }: PropsWithChildren)=>{
    return <View>{children}</View>;
}

const Home = ()=>{

    const [userInformations] = useState({
        tittleContent: "Antonio Sala Barbosa",
        username: "@antoniosalabarbosa",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate placeat nisi dicta cum ducimus minima nam quod. Ullam asperiores ipsum dolorum maxime aliquam accusamus? Animi architecto perferendis itaque hic aut?"
    });

    return (
        <View style={{
            ...GlobalStyles.spaceHorizontal, 
            paddingTop: 20
        }}>
            <View style={{
                ...HomeStyles.profileContainer,
                justifyContent: "space-between",
            }}>
                <ProfileImage />

                <View style={{
                    ...HomeStyles.profileContainer,
                    columnGap: 20,
                }}>
                    <ProfileCountWithText
                        countContent="2004"
                        tittleContent="Post"
                    />

                    <ProfileCountWithText
                        countContent="2004"
                        tittleContent="Followers"
                    />

                    <ProfileCountWithText
                        countContent="2004"
                        tittleContent="Following"
                    />
                </View>
            </View>

            <ProfileText 
                tittleContent={userInformations.tittleContent}
                username={userInformations.username}
                description={userInformations.description}
            />
            
            <StoriesSection>
                <StoryItem />
            </StoriesSection>

        </View>
    );
};

export default Home;