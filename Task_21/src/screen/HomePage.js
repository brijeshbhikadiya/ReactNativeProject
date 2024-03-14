import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState, useRef} from 'react';
import VideoPlayer from 'react-native-video-player';

const HomePage = () => {
  const screenWidth = Dimensions.get('window').width;
  const scrollViewRef = useRef(null);
  const scrollViewRef2 = useRef(null);
  const [CurrentIndex, SetCurrentIndex] = useState(0);
  const [CurrentIndex2, SetCurrentIndex2] = useState(0);
  const [SelectedTab, setSelctedTab] = useState('All');

  //PosterData
  const [PosterData, setPosterData] = useState([
    {
      PosterImage: require('../assets/images/PosterImage.png'),
    },
    {
      PosterImage: require('../assets/images/PosterImage.png'),
    },
    {
      PosterImage: require('../assets/images/PosterImage.png'),
    },
  ]);

  // PostDataArray
  const [PostData, setPostData] = useState([
    {
      Post1: require('../assets/images/Post1.png'),
      Post2: require('../assets/images/Post2.png'),
      Post1Dec: '21WN reversible angora \n cardigan',
      Post2Dec: '21WN reversible angora \n cardigan',
      Price1: '$120',
      Price2: '$120',
    },
    {
      Post1: require('../assets/images/Post3.png'),
      Post2: require('../assets/images/Post4.png'),
      Post1Dec: '21WN reversible angora \n cardigan',
      Post2Dec: 'Oblong bag',
      Price1: '$120',
      Price2: '$120',
    },
  ]);

  //JustForYouArray
  const [JustForYouData, setJustForYou] = useState([
    {
      JFYimage: require('../assets/images/JFYImage1.png'),
      JFYText: 'Harris Tweed Three button \n Jacket',
      JFYPrice: '$120',
    },
    {
      JFYimage: require('../assets/images/JFYImage1.png'),
      JFYText: 'Harris Tweed Three button \n Jacket',
      JFYPrice: '$120',
    },
    {
      JFYimage: require('../assets/images/JFYImage1.png'),
      JFYText: 'Harris Tweed Three button \n Jacket',
      JFYPrice: '$120',
    },
  ]);

  //FeaturedArray
  const [FeaturedData, setFeatured] = useState([
    {
      FeaturedImage1: require('../assets/images/OpenLogo1.png'),
      FeaturedImage2: require('../assets/images/OpenLogo2.png'),
      FeaturedText1: 'Fast shipping. Free on \n orders over $25.',
      FeaturedText2: 'Sustainable process \n from start to finish.',
    },
    {
      FeaturedImage1: require('../assets/images/OpenLogo3.png'),
      FeaturedImage2: require('../assets/images/OpenLogo4.png'),
      FeaturedText1: 'Unique designs \n and high-quality materials.',
      FeaturedText2: 'Fast shipping. \n Free on orders over $25.',
    },
  ]);

  //FollowUsArray
  const [FollowUsData, setFollowUs] = useState([
    {
      FollowUsImage1: require('../assets/images/Mia.png'),
      MiaText: '@mia',
      FollowUsImage2: require('../assets/images/Jihyn.png'),
      JihanText: '@_jihyn',
    },
    {
      FollowUsImage1: require('../assets/images/MiaImage2.png'),
      MiaText: '@mia',
      FollowUsImage2: require('../assets/images/JihanImage2.png'),
      JihanText: '@_jihyn',
    },
  ]);

  const scrollToIndex = index => {
    scrollViewRef.current.scrollToIndex({
      animated: true,
      index: index,
    });
    SetCurrentIndex(index);
  };

  const scrollToIndex2 = index => {
    scrollViewRef2.current.scrollToIndex({
      animated: true,
      index: index,
    });
    SetCurrentIndex2(index);
  };

  const handleTabPress = Tab => {
    setSelctedTab(Tab);
  };

  return (
    <View style={styles.Container}>
      <ScrollView>
        <StatusBar hidden></StatusBar>
        {/* TitlerBarView */}
        <View style={styles.TitlerBarView}>
          <Image
            source={require('../assets/images/Menu.png')}
            style={styles.MenuImage}></Image>
          <Image source={require('../assets/images/Logo.png')}></Image>
          <Image
            source={require('../assets/images/Search.png')}
            style={styles.SearchImage}></Image>
          <Image
            source={require('../assets/images/ShoppingBag.png')}
            style={styles.ShoppingBagImage}></Image>
        </View>

        {/* Poster View */}

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          ref={scrollViewRef2}
          data={PosterData}
          onScroll={evnt => {
            let indexValue = evnt.nativeEvent.contentOffset.x / screenWidth;
            //console.log('indexValue--', Math.ceil(indexValue));
            SetCurrentIndex(Math.ceil(indexValue));
          }}
          renderItem={({item, index}) => (
            <View key={index} style={{width: screenWidth}}>
              <Image
                source={item.PosterImage}
                style={{resizeMode: 'stretch', width: null}}></Image>
            </View>
          )}></FlatList>
        <TouchableOpacity style={styles.ExploreMoreTouchable}>
          <Text style={styles.ExploreCollectionText}>EXPLORE COLLECTION</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 167.5,
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          {PosterData.map((item, index) => (
            <TouchableOpacity onPress={() => scrollToIndex2(index)}>
              {CurrentIndex === index ? (
                <View style={styles.FillSqure}></View>
              ) : (
                <View style={styles.EmptySqure}></View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.NewArrivalText}>NEW ARRIVAL</Text>
        <Image
          source={require('../assets/images/LineDesign.png')}
          style={{alignSelf: 'center'}}></Image>

        <View style={styles.NewArraivalList}>
          <TouchableOpacity onPress={() => handleTabPress('All')}>
            <Text style={styles.ListText}>All</Text>
            <View style={SelectedTab === 'All' ? styles.RedSqure : null}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress('Apparel')}>
            <Text style={styles.ListText}>Apparel</Text>
            <View
              style={SelectedTab === 'Apparel' ? styles.RedSqure : null}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress('Dress')}>
            <Text style={styles.ListText}>Dress</Text>
            <View
              style={SelectedTab === 'Dress' ? styles.RedSqure : null}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress('Tshirt')}>
            <Text style={styles.ListText}>Tshirt</Text>
            <View
              style={SelectedTab === 'Tshirt' ? styles.RedSqure : null}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress('Bag')}>
            <Text style={styles.ListText}>Bag</Text>
            <View style={SelectedTab === 'Bag' ? styles.RedSqure : null}></View>
          </TouchableOpacity>
        </View>

        {/* PostFlatList */}
        {PostData.map(item => (
          <View style={styles.FlatListPostView}>
            <View style={styles.Post1View}>
              <Image source={item.Post1}></Image>
              <Text style={styles.PostDecText}>{item.Post1Dec}</Text>
              <Text style={styles.PriceText}>{item.Price1}</Text>
            </View>
            <View style={styles.Post1View}>
              <Image source={item.Post2}></Image>
              <Text style={styles.PostDecText}>{item.Post2Dec}</Text>
              <Text style={styles.PriceText}>{item.Price2}</Text>
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.ExploreMoreTouchableStyle}>
          <Text style={styles.ExploreMoreText}>Explore More</Text>
          <Image
            source={require('../assets/images/RightArrow.png')}
            style={styles.RightArrowImage}></Image>
        </TouchableOpacity>

        {/* BrandView */}
        <View style={{marginTop: 37}}>
          <Image
            source={require('../assets/images/LineDesign.png')}
            style={{alignSelf: 'center'}}></Image>
          <View
            style={{
              marginTop: 34.44,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Image source={require('../assets/images/Prada.png')}></Image>
            <Image source={require('../assets/images/Burberry.png')}></Image>
            <Image source={require('../assets/images/Boss.png')}></Image>
          </View>
          <View
            style={{
              marginTop: 34.44,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Image source={require('../assets/images/Catier.png')}></Image>
            <Image source={require('../assets/images/Gucci.png')}></Image>
            <Image source={require('../assets/images/TiffanyCo.png')}></Image>
          </View>
          <Image
            source={require('../assets/images/LineDesign.png')}
            style={{alignSelf: 'center', marginTop: 41.73}}></Image>
        </View>

        {/* CollectionView */}
        <View style={{marginTop: 47}}>
          <Text style={styles.CollectionText}>COLLECTION</Text>
          <Image
            source={require('../assets/images/Collection1.png')}
            style={{resizeMode: 'stretch', width: null}}></Image>
          <Image
            source={require('../assets/images/Collection2.png')}
            style={{alignSelf: 'center', marginTop: 40}}></Image>
          <VideoPlayer
            style={{marginTop: 32, marginBottom: 40}}
            video={require('../assets/videos/MyVideo.mp4')}
            thumbnail={require('../assets/images/Collection3.png')}
            autoplay={false}
          />
        </View>

        <View style={{alignSelf: 'center'}}>
          <Text style={styles.JustForYouText}>JUST FOR YOU</Text>
          <Image source={require('../assets/images/LineDesign.png')}></Image>
        </View>

        {/* JustForYouView */}
        <FlatList
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          ref={scrollViewRef}
          onScroll={evnt => {
            let indexValue = evnt.nativeEvent.contentOffset.x / screenWidth;
            //console.log('indexValue--', Math.ceil(indexValue));
            SetCurrentIndex(Math.ceil(indexValue));
          }}
          data={JustForYouData}
          horizontal
          renderItem={({item, index}) => (
            <View style={[styles.JFYFlatListView]} key={index}>
              <Image source={item.JFYimage}></Image>
              <Text style={styles.JFYTextStyle}>{item.JFYText}</Text>
              <Text style={styles.JFYPriceStyle}>{item.JFYPrice}</Text>
            </View>
          )}></FlatList>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 167.5,
            justifyContent: 'space-between',
            marginTop: 20,
            marginBottom: 55,
          }}>
          {JustForYouData.map((item, index) => (
            <TouchableOpacity onPress={() => scrollToIndex(index)}>
              {CurrentIndex === index ? (
                <View style={styles.BlackSqure}></View>
              ) : (
                <View style={styles.BlackEmptySqure}></View>
              )}
            </TouchableOpacity>
          ))}
        </View>
        {/* TrandingView */}
        <View>
          <Text style={styles.TradingText}>@TRENDING</Text>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 16,
              marginRight: 45,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity style={styles.Touchable2021}>
              <Text style={styles.Text2021}>#2021</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SpringTouchable}>
              <Text style={styles.Text2021}>#spring</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.CollectionTouchable}>
              <Text style={styles.Text2021}>#collection</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.FillTouchable}>
              <Text style={styles.Text2021}>#fall</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 8,
              marginLeft: 16,
              marginRight: 8,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity style={styles.DressTouchable}>
              <Text style={styles.Text2021}>#dress</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.AutoCollectionTouchable}>
              <Text style={styles.Text2021}>#autumncollection</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OpenFaishionTouchable}>
              <Text style={styles.Text2021}>#openfashion</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* OpenFaishionView */}
        <View style={styles.OpenFaishionView}>
          <Image
            source={require('../assets/images/Logo.png')}
            style={styles.LogoImage}></Image>
          <View>
            <Text style={styles.Desc}>
              Making a luxurious lifestyle accessible {'\n'} for a generous
              group of women is our {'\n'} daily drive.
            </Text>
            <Image
              source={require('../assets/images/LineDesign.png')}
              style={{alignSelf: 'center', marginTop: 4.94}}></Image>
          </View>

          {FeaturedData.map((item, index) => (
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={styles.FeaturedView}>
                <Image
                  source={item.FeaturedImage1}
                  style={styles.FeaturedImage}></Image>
                <Text style={styles.FeaturedText1}>{item.FeaturedText1}</Text>
              </View>
              <View style={styles.FeaturedView}>
                <Image
                  source={item.FeaturedImage2}
                  style={styles.FeaturedImage}></Image>
                <Text style={styles.FeaturedText1}>{item.FeaturedText2}</Text>
              </View>
            </View>
          ))}

          <Image
            source={require('../assets/images/Wave.png')}
            style={styles.WaveImage}></Image>
        </View>

        {/* FollowUsView */}
        <View style={{marginBottom: 30}}>
          <Text style={styles.followusText}>FOLLOW US</Text>
          <Image
            source={require('../assets/images/InstagramBlank.png')}
            style={{
              alignSelf: 'center',
              marginTop: 3,
              marginBottom: 3,
            }}></Image>
          {FollowUsData.map(item => (
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 20,
                justifyContent: 'space-between',
                marginTop: 15,
              }}>
              <View>
                <Image source={item.FollowUsImage1}></Image>
                <Text style={styles.MiaText}>{item.MiaText}</Text>
              </View>
              <View>
                <Image source={item.FollowUsImage2}></Image>
                <Text style={styles.MiaText}>{item.JihanText}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* SociaMediaView */}
        <View>
          <View style={styles.SocialMediaView}>
            <Image
              source={require('../assets/images/SnapChatFill.png')}></Image>
            <Image
              source={require('../assets/images/InstagramFill.png')}></Image>
            <Image source={require('../assets/images/YoutubeFill.png')}></Image>
          </View>

          <Image
            source={require('../assets/images/LineDesign.png')}
            style={{alignSelf: 'center', marginTop: 24}}></Image>

          <Text style={styles.EmailDes}>
            support@openui.design{'\n'}+60 825 876{'\n'}08:00 - 22:00 - Everyday
          </Text>

          <Image
            source={require('../assets/images/LineDesign.png')}
            style={{alignSelf: 'center', marginTop: 24}}></Image>

          <View style={styles.AboutContactBlogView}>
            <Text style={styles.AboutText}>About</Text>
            <Text style={styles.AboutText}>Contact</Text>
            <Text style={styles.AboutText}>Blog</Text>
          </View>

          <View style={styles.CopyRightView}>
            <Text>Copyright© OpenUI All Rights Reserved.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  //View
  TitlerBarView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(231, 234, 239, 1)',
    paddingTop: 19,
    paddingBottom: 9,
  },
  FlatListPostView: {
    flexDirection: 'row',
    //marginHorizontal:30,
    alignSelf: 'center',
  },
  Post1View: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 11,
  },
  JFYFlatListView: {
    marginLeft: 16.37,
    marginTop: 22.31,
  },
  OpenFaishionView: {
    backgroundColor: 'rgba(242, 242, 242, 1)',
    marginTop: 22.44,
  },
  FeaturedView: {
    marginTop: 13.6,
    marginLeft: 15.51,
    marginRight: 33.51,
  },
  SocialMediaView: {
    marginHorizontal: 106.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 23.78,
  },
  AboutContactBlogView: {
    flexDirection: 'row',
    marginTop: 32,
    marginBottom: 22.97,
    marginLeft: 58,
    marginRight: 70,
    justifyContent: 'space-between',
  },
  CopyRightView: {
    backgroundColor: 'rgba(196, 196, 196, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 11.07,
    paddingBottom: 15.18,
  },
  FillSqure: {
    height: 5.66,
    width: 5.66,
    backgroundColor: 'white',
    transform: [{rotate: '45deg'}],
  },
  EmptySqure: {
    height: 5.66,
    width: 5.66,
    borderWidth: 1,
    borderColor: 'white',
    transform: [{rotate: '45deg'}],
  },
  BlackSqure: {
    height: 5.66,
    width: 5.66,
    backgroundColor: 'rgba(136, 136, 136, 1)',
    transform: [{rotate: '45deg'}],
  },
  BlackEmptySqure: {
    height: 5.66,
    width: 5.66,
    borderWidth: 1,
    borderColor: 'rgba(136, 136, 136, 1)',
    transform: [{rotate: '45deg'}],
  },
  RedSqure: {
    alignSelf: 'center',
    height: 5.66,
    width: 5.66,
    backgroundColor: 'rgba(221, 133, 96, 1)',
    transform: [{rotate: '45deg'}],
    marginTop: 10,
  },
  NewArraivalList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 13.75,
    marginBottom: 13,
  },
  //Touchable
  ExploreMoreTouchable: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 61,
    marginTop: -80,
    alignSelf: 'center',
    width: 253,
  },
  ExploreMoreTouchableStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 27.84,
  },
  Touchable2021: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 61,
    borderRadius: 30,
    backgroundColor: 'rgba(249, 249, 249, 1)',
  },
  SpringTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 75,
    borderRadius: 30,
    backgroundColor: 'rgba(249, 249, 249, 1)',
  },
  CollectionTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 100,
    borderRadius: 30,
    backgroundColor: 'rgba(249, 249, 249, 1)',
  },
  FillTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 54,
    borderRadius: 30,
    backgroundColor: 'rgba(249, 249, 249, 1)',
  },
  DressTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 69,
    borderRadius: 30,
    backgroundColor: 'rgba(249, 249, 249, 1)',
  },
  AutoCollectionTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 150,
    borderRadius: 30,
    backgroundColor: 'rgba(249, 249, 249, 1)',
  },
  OpenFaishionTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 116,
    borderRadius: 30,
    backgroundColor: 'rgba(249, 249, 249, 1)',
  },
  //Images
  MenuImage: {
    position: 'absolute',
    left: 16,
    top: 22.75,
  },
  SearchImage: {
    position: 'absolute',
    right: 63,
    top: 24,
  },
  ShoppingBagImage: {
    position: 'absolute',
    right: 23,
    top: 24,
  },
  RightArrowImage: {
    marginLeft: 8,
    marginTop: 4,
  },
  LogoImage: {
    alignSelf: 'center',
    marginTop: 27.56,
  },
  FeaturedImage: {
    alignSelf: 'center',
  },
  WaveImage: {
    alignSelf: 'center',
    marginTop: 33.17,
    marginBottom: 28.4,
  },
  //Text
  ExploreCollectionText: {
    color: 'rgba(252, 252, 252, 1)',
    fontFamily: 'TenorSans',
    fontSize: 16,
    lineHeight: 30,
  },
  NewArrivalText: {
    textAlign: 'center',
    marginTop: 35.42,
    fontFamily: 'TenorSans',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 18,
    lineHeight: 40,
  },
  PostDecText: {
    textAlign: 'center',
    fontFamily: 'TenorSans',
    fontSize: 12,
    marginTop: 4,
    color: 'rgba(51, 51, 51, 1)',
    lineHeight: 16,
  },
  PriceText: {
    textAlign: 'center',
    fontFamily: 'TenorSans',
    fontSize: 15,
    marginTop: 4,
    color: 'rgba(221, 133, 96, 1)',
    lineHeight: 24,
  },
  ExploreMoreText: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'TenorSans',
    fontSize: 16,
    lineHeight: 24,
  },
  CollectionText: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'TenorSans',
    fontSize: 18,
    lineHeight: 40,
    marginBottom: 16,
  },
  JustForYouText: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'TenorSans',
    fontSize: 18,
    lineHeight: 40,
    //marginBottom:16
  },
  JFYTextStyle: {
    textAlign: 'center',
    fontFamily: 'TenorSans',
    fontSize: 16,
    lineHeight: 24,
    color: 'rgba(51, 51, 51, 1)',
    marginTop: 4,
  },
  JFYPriceStyle: {
    textAlign: 'center',
    fontFamily: 'TenorSans',
    fontSize: 16,
    lineHeight: 24,
    color: 'rgba(221, 133, 96, 1)',
    marginTop: 4,
  },
  TradingText: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'TenorSans',
    fontSize: 18,
    lineHeight: 40,
    textAlign: 'center',
  },
  Text2021: {
    color: 'rgba(51, 51, 51, 1)',
    fontFamily: 'TenorSans',
    fontSize: 14,
    lineHeight: 26,
  },
  Desc: {
    textAlign: 'center',
    color: 'rgba(85, 85, 85, 1)',
    fontFamily: 'TenorSans',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 16.17,
  },
  FeaturedText1: {
    textAlign: 'center',
    color: 'rgba(85, 85, 85, 1)',
    fontFamily: 'TenorSans',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 11.96,
  },
  followusText: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'TenorSans',
    fontSize: 18,
    lineHeight: 40,
    marginTop: 32.97,
  },
  MiaText: {
    position: 'absolute',
    left: 9,
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'TenorSans',
    fontSize: 14,
    lineHeight: 16.38,
    bottom: 12,
  },
  EmailDes: {
    textAlign: 'center',
    marginTop: 18.73,
    color: 'rgba(51, 51, 51, 1)',
    fontFamily: 'TenorSans',
    fontSize: 16,
    lineHeight: 29.44,
  },
  AboutText: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'TenorSans',
    fontSize: 16,
    lineHeight: 24,
  },
  CopyRightText: {
    color: 'rgba(85, 85, 85, 1)',
    fontFamily: 'TenorSans',
    fontSize: 12,
    lineHeight: 19.02,
  },
  ListText: {
    color: 'rgba(33, 40, 6, 1)',
    fontFamily: 'TenorSans',
    fontSize: 14,
    lineHeight: 14.84,
  },
});

export default HomePage;
