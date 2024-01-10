import { View, Text } from "react-native";
import ButtonOpacity from "../ButtonOpacity";
import HeaderStyles from "./style";

const Header = ()=>{
    return (
        <View style={HeaderStyles.header}>
            <Text style={HeaderStyles.span}>Profile</Text>
            
            <View>
                <ButtonOpacity
                    viewStyle={HeaderStyles.button}
                    textStyle={HeaderStyles.buttonText}
                    textContent="+" 
                />
            </View>
        </View>
    );
};

export default Header;