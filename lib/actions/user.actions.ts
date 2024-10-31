'use server'

import { clerkClient } from "@clerk/nextjs/server"
import { parseStringify } from "../utils";

export const getClerkUsers = async (userIds : {userIds: string[]}) => {
    console.log('userIds', userIds)
    try {
        const { data } = await clerkClient.users.getUserList({
            emailAddress: userIds,
        });
        console.log('user data', data)

        const users = data?.map((user) => ({
                id: user?.id,
                name: `${user?.firstName} ${user?.lastName}`,
                emailAddress: user?.emailAddresses[0]?.email,
                avatar: user?.imageUrl
        }));

        const sortedUsers = userIds?.map((email) => users.find((user) => user?.email === email))

        return parseStringify(sortedUsers)
    } catch (error){
        console.log(`Error fetching users: ${error}`)
    }
}