import { StyleSheet } from "react-native";

const HeaderStyles = StyleSheet.create({
    header: {
        height: 60,
        borderBottomWidth: 4,
        borderStyle: "solid",
        borderBottomColor: "#222",
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
    },

    span: {
        fontSize: 24,
    },

    button: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#222",
        borderRadius: 10,
    },

    buttonText: {
        width: "100%",
        height: "100%",
        textAlign: "center",
        verticalAlign: "middle",
        fontSize: 25,
    }
});

export default HeaderStyles;