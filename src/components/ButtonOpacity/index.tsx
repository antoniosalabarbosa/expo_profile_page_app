import { 
    Text, 
    TouchableOpacity, 
    StyleProp,
    ViewStyle,
    TextStyle
} from "react-native";
import { PropsWithChildren } from "react";

interface ButtonOpacity_int {
    textContent: string,
    viewStyle?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>,
}

const ButtonOpacity = ({
    textContent, viewStyle, textStyle
}: PropsWithChildren<ButtonOpacity_int>) => {
    return (
        <TouchableOpacity style={viewStyle}>
            <Text style={textStyle}>
                {textContent}
            </Text>
        </TouchableOpacity>
    );
};

export default ButtonOpacity;