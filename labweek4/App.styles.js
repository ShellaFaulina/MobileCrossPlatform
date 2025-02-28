import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    flexDirection: "row", // Membuat avatar dan teks sejajar
    alignItems: "center", // Menjaga elemen dalam satu garis sejajar
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
    flexDirection: "row", // Pastikan avatar dan teks sejajar
    alignItems: "center", // Menjaga kesejajaran vertikal
    flex: 1, // Supaya teks mengisi ruang yang tersedia
  },
  cardText: {
    flex: 1, // Memastikan teks tidak turun ke bawah
    marginLeft: 12, // Memberikan jarak antara avatar dan teks
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});

export default styles;
