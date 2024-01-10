import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    
    profileImage_demo: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: "#222",
    },

    profileNumbers: {
        flexDirection: "column",
        alignItems: "center",
    },

    profileCountContent: {
        fontSize: 18
    },

    profileTittleContent: {
        fontSize: 14,
    },

    userTittle: {
        marginTop: 5,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: "bold",
    },
    
    userName: {
        fontSize: 16,
        fontStyle: "italic",
    },

    userDescription: {
        fontSize: 14,
        lineHeight: 18,
    },
});

export default HomeStyles;