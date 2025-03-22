import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#F5E6CC",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: "#F5E6CC",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: "30%",
  },
  card: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    width: 350,
    gap: 12,
    backgroundColor: "#f8f8f8",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 999,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  cardText: {
    flex: 1,
    marginLeft: 12,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  userList: {
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#8B7765",  
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    marginVertical: 10,
    borderRadius: 8,
    alignItems: "center", 
  },
  buttonText: {
    color: "#fff", 
    fontSize: 16,
    fontWeight: "bold",
  },
  goBackButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#8B7765", 
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    elevation: 2,
  },
  
  goBackText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  
  
});

export default styles;
