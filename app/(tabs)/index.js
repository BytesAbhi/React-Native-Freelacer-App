import React, { useEffect } from "react";
import { Image, StyleSheet, View, SafeAreaView } from "react-native";
import { Link, useRouter } from "expo-router"; // Import useRouter

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    
    router.push("/Home");
  }, [router]);

  return (
    <SafeAreaView>
      <View>
        <Link href="/splash">Hello world</Link>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
