import { Stack } from "@mantine/core";
import { Link } from "react-router";

const NavItems = () => {
    return (
        <Stack>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
        </Stack>
    )
}

export default NavItems;