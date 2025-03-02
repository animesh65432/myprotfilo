import { ProjecTypes } from "@/types/index"

export const Projects: ProjecTypes[] = [
    {
        name: "Family Gossip",
        image: "https://images.wsj.net/im-907968/?width=1278&size=1",
        live: "https://family-gossip.vercel.app",
        code: "https://family-gossip.vercel.app",
        about: "A social platform where users can create and edit posts, follow others, and view profiles.  Implemented authentication with Node.js, Express.js, and PostgreSQL.Built an interactive UI using React, Redux, and ShadCN/ UI, featuring theme toggling and friend management. Also integrated a video calling feature with link - sharing for easy joining.",
    },
    {
        name: "Chatspring",
        image: "https://d1iiooxwdowqwr.cloudfront.net/pub/appsubmissions/20190806153212_icon.png",
        live: "https://chatspring.vercel.app",
        code: "https://github.com/animesh65432/CHAT-WEBISTE",
        about: "The user who creates a group becomes the admin. Only they can add members and promote other admins. Implemented multimedia chats using Cloudinary as storage . Optimized the chat app by moving daily messages to archive with a cron job. Implemented SQL schema for one - to - one, one - to - many, and many - to - many"
    },
    {
        name: "Savewave",
        image: "https://moneyview.in/images/blog/wp-content/uploads/2017/10/Blog-11-reasonsfeature-min.jpg",
        live: "https://github.com/animesh65432/EXPENSE-TRACKER-FullStack",
        code: "https://savewave.vercel.app",
        about: "Developed UI for separate premium and non-premium users . Integrated Stripe to enable users to buy premium accounts. Premium account features include: Daily / monthly / yearly expense separation, Download expenses, View download history, Leaderboard. Premium users can download their expenses, Tracks user expenses, credits, and savings displaying them in a user - friendly interface."
    }
]