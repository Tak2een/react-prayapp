import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
const JISU_IMG_SRC =
  "https://mblogthumb-phinf.pstatic.net/MjAyMTA4MDlfMjk5/MDAxNjI4NDk0MjIxMTQ3.qcHkwxU8dtVwZ9SNW9lLmafvqSz8ppEjNEHGHJ4EY9Mg.wb59cCXBTTRNXcAc74BSZb5TWb2clZMtgLNkPLLajeEg.PNG.hwoarangx2/3F3F3F3F_3F3F_The_Album_3F3F_3F3F_1.png?type=w800";

const BP_MEMBER_IMG_SRC =
  "https://images.chosun.com/resizer/TRylAoJ09lTz-DxqRkoC7Q5cmqA=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/IGUWJMF4RVAVNB4JXPDZLJME6Q.jpg";

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.postHeader}>
          <View style={styles.titleContainer}>
            <Text style={styles.mainTitle}>
              게시글 제목 질문 제목 질문 제목
            </Text>
            <Text style={styles.subTitle}>
              2022.02.15. 16:12 작성자:홍길동(제노)
            </Text>
          </View>
          <View style={styles.UserImageContainer}>
            <Image style={styles.userImage} source={{ uri: JISU_IMG_SRC }} />
          </View>
        </View>
        <View style={styles.postContet}>
          <View style={styles.postContentImageContainer}>
            <Image
              style={styles.postImage}
              source={{ uri: BP_MEMBER_IMG_SRC }}
            />
            <Image
              style={styles.postImage}
              source={{ uri: BP_MEMBER_IMG_SRC }}
            />
          </View>
          <View style={styles.postContentReputationContainer}>
            <View style={styles.reputationItemContainer}>
              <Image source={require("../../../assets/heart.png")} />
              <Text style={styles.reputationNumberText}>132</Text>
            </View>
            <View style={styles.reputationItemContainer}>
              <Image source={require("../../../assets/Comment.png")} />
              <Text style={styles.reputationNumberText}>132</Text>
            </View>
          </View>
          <View style={styles.postContentDescriptionContainer}>
            <Text style={styles.descriptionText}>
              내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
            </Text>
          </View>
          <View style={styles.postContentDownloadContainer}>
            <Text style={styles.descriptionText}>file download</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  postHeader: {
    height: 89,
    backgroundColor: "white",
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  titleContainer: { flex: 1 },
  mainTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 8 },
  subTitle: { fontSize: 14, color: "#CCCCCC" },
  UserImageContainer: {
    flexBasis: 30,
    height: 30,
    marginRight: 3,
  },
  userImage: { resizeMode: "cover", width: 30, height: 30, borderRadius: 15 },
  postContent: {},
  postContentImageContainer: {},
  postImage: { height: 201, marginBottom: 10, resizeMode: "cover" },
  postContentReputationContainer: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  reputationItemContainer: {
    flexDirection: "row",
    height: 21,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 38,
  },
  reputationNumberText: { fontSize: 14, marginLeft: 5 },
  postContentDescriptionContainer: { marginVertical: 20 },
  descriptionText: { fontSize: 16 },
  postContentDownloadContainer: { padding: 20, backgroundColor: "#F7F7F7" },
});

export default Main;
