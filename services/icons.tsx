import {
	FaCalendar,
	FaCity,
	FaMoneyBill,
	FaPeopleGroup,
	FaPerson,
	FaTrash,
} from "react-icons/fa6";
import { GiLargeDress, GiPlasticDuck } from "react-icons/gi";
import { IoIosPaper } from "react-icons/io";
import { IoFastFood } from "react-icons/io5";
import { MdSanitizer } from "react-icons/md";

export const icons = {
	people: <FaPeopleGroup />,
	city: <FaCity />,
	calendar: <FaCalendar />,
	person: <FaPerson />,
	food: <IoFastFood />,
	sanitizer: <MdSanitizer />,
	plastic: <GiPlasticDuck />,
	paper: <IoIosPaper />,
	dress: <GiLargeDress />,
	trash: <FaTrash />,
	money: <FaMoneyBill />,
	// Add more icons as needed
	// https://react-icons.github.io/react-icons/
};
