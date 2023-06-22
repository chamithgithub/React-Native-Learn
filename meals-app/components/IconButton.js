import { Pressable } from "react-native";
import {Ionicons} from "@expo/vector-icons";

const IconButton = ({onPress}) =>{
return <Pressable onPress={onPress}>
    <IconButton name ="star" size {24} color ="white"/>
</Pressable>

}
export default IconButton;