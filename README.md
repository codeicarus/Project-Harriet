# iBird: A Web3 Social Media Platform on Hedera Hashgraph

[iBird](https://ibird.io/) is a fully functional Web3 social media platform operating on Hedera Hashgraph built by [iAssets](https://iassets.org/). It offers users an opportunity to join, create an account, and post messages directly on the Hedera Network. Not only messages, iBird writes all user interactions including posting, liking, and commenting on a unique Hedera Consensus Service ([HCS Topic](https://hashscan.io/mainnet/topic/0.0.1290501)).

## iBird Explorer 

**iBird Explorer** is an open-source tool providing you the freedom to retrieve and read messages from the iBird social media platform, even when the website is offline. iBird stores all these user actions securely on Hedera's robust network where every post carries a unique hash, thus allowing users to prove the ownership of their content.

By using iBird Explorer ([GitHub link](https://github.com/iassetsorg/ibird-explorer)), you can enter the hash of a message or content item and retrieve the corresponding content directly from the Hedera Network, ensuring permanent availability irrespective of the iBird website status.

## Project Harriet: The Journey Towards Decentralization

**Project Harriet** is on a mission to redefine social media by making iBird 100% open source and 100% decentralized. It marks the dawn of a new era in social networking, leveraging cutting-edge Web3 technologies on Hedera Hashgraph.

The ultimate goal is to foster a rapid, transparent, and decentralized social network, solidifying user's control on their data.

### Project Building Blocks
- **Writer**: The interface for content creation including posts, comments, or any other user interactions.
    
- **Reader**: The data retrieval system which fetches the content from HCS, coupled with regular pull operations to keep the user data in sync.

## Structure

We plan to release multiple versions of the platform, starting from simple and gradually adding more features and complexity. Here are the details of some of the initial versions:

### v0.0.1 (Threads)

- Users can connect their wallet, supporting HashPack, Blade, and Metamask.
- Users can create topics(threads) and write messages.
- Users can read messages by entering a topic ID.
- **Structure**:


  - Message 1: Topic information
    ```
    {
      "Identifier":"iAssets"
      "Type":"Thread",
      "Author": "AccountId",
    }
    ```
  - Message 2: User's first message
    ```
    {
      "Message": "Hello"
    }
    ```
  - Message 3: User's second message
    ```
    {
      "Message": "Good Morning"
    }
    ```

### v0.0.2 (Interactions)

- Users can reply to messages and interact with them.
- Users can like or dislike a message.
- **Structure**:
  - Message 1: Topic information
    ```
    {
      "Identifier":"iAssets"
      "Type":"Thread",
      "Author": "AccountId",
    }
    ```
  - Message 2: User1 first message
    ```
    {
      "Author": "AccountId1",
      "Message": "Hello"
    }
    ```
  - Message 3: User2 comment to user1 first message
    ```
    {
      "Author": "AccountId2",
      "Reply_to": "Message 2",
      "Message": "Hi"
    }
    ```
  - Message 4: User1 like Message 3 
    ```
    {
      "Author": "AccountId1",
      "Like_to": "Message 3",
    }
    ```

### v0.0.3 (Explore Feed)

- The platform now includes a globally accessible "Explore Feed".
- This feed is a directory of all threads created across the platform, which helps enhance discoverability and encourage interaction.
- Each thread is automatically added to the Explore Feed upon creation, covering a wide array of topics.
- Users have an option to choose if their threads should be visible on Explore Feed or not. This gives them control over the visibility of their posts.
- Users can access any thread from the Explore Feed, improving community engagement.

- **Structure**:
  - Message 1: Topic information
    ```
    {
      "Identifier":"iAssets",
      "Type":"Explore",
      "Author": "iAssets",
    }
    ```
  - Message 2: Thread1
    ```
    {
      "Thread": "TopicId1"
    }
    ```
  - Message 3: Thread2
    ```
    {
      "Thread": "TopicId2"
    }
    ```

### v0.0.4 (User Profile, Threads Directory and Platform Directory)

  #### User Profile
- When a user creates a profile, a unique Topic is created for them. This acts as a personal profile page for a user. It houses the user's details.

- **Structure**:
  - Message 1: Topic information
    ```
    {
      "Identifier":"iAssets",
      "Type":"Profile",
      "Author": "AccountId",
    }
    ```
  - Message 2: Information
    ```
    {
    "Label":"Information",
    "Full_Name": "John Doe",
    "Bio": "Software Developer passionate about Web3",
    "Joined_Date": "2023-09-30",
    'Website': 'https://johndoe.com'
    }
    ```
  - Message 3: Threads Directory
    ```
    {
      "Label":"Threads",
      "Threads":"TopicId"
    }
    ```
  - Message 4: Followings Directory
    ```
    {
      "Label":"Followings",
      "Followings":"TopicId"
    }
    ```
  #### Threads Directory
- This is a directory for user threads. This Topic is linked back to the user's Profile. 

- **Structure**:
  - Message 1: Topic information
    ```
    {
      "Identifier":"iAssets",
      "Type":"Threads",
      "Author": "AccountId",
    }
    ```
  - Message 2: Thread1
    ```
    {
      "Thread": "TopicId1"
    }
    ```
  - Message 3: Thread2
    ```
    {
      "Thread": "TopicId2"
    }
    ```

  #### Platform Directory
- This is the highest level of organization and acts as the central directory of the platform.
- It stores IDs of all users and their associated profile topics.
- This can be seen as a big directory that holds the records of all users who join the platform.

- **Structure**:
  - Message 1: Topic information
    ```
    {
      "Identifier":"iAssets",
      "Type":"Platform",
      "Author": "iAssets",
    }
    ```
  - Message 2: User1
    ```
    {
      "ID1": "AccountId1"
      "User1": "User Profile1"
    }
    ```
  - Message 3: User2
    ```
    {
      "ID2": "AccountId2"
      "User2": "User Profile2"
    }
    ```

### v0.0.5 (Media Support - IPFS)

- Users can upload media files which get stored on IPFS. The IPFS hash of the uploaded media file is stored in the message, creating a permanent, unmodifiable record.
- Users can view or download this media by retrieving it from IPFS using the stored hash.

- **Structure**:
  - Message 1: Topic information
    ```
    {
      "Identifier":"iAssets"
      "Type":"Thread",
      "Author": "AccountId",
    }
    ```
  - Message 2: User first message
    ```
    {
      "Message": "Hello"
      "Media_IPFS_Hash": "Qmbfvg7t"
    }
    ```
  - Message 3: User second message
    ```
    {
      "Message": "Good Morning"
      "Media_IPFS_Hash": "Qmbfvg7t"
    }
    ```

### v0.0.6 (Tipping - ASSET and HBAR Tokens)

- Users can send tips to each other using [ASSET](https://iassets.org/#token) and HBAR tokens.
- The platform supports peer-to-peer transactions, driving greater user engagement and monetizing content creation.

- **Structure**:
  - Transaction
    ```
    Tip Transaction | Sender: AccountId | Recipient: RecipientId | Amount: 10 ASSET | Timestamp: 2023-11-11T13:34:56Z
    Tip Transaction | Sender: AccountId | Recipient: RecipientId | Amount: 100 HBAR | Timestamp: 2023-11-11T13:34:56Z
    ```
  - Transaction Memo
    ```
    Memo: "Tip | For: Tread Topic Id"
    ```

### v0.0.7 (Boosting Threads)

- Users who hold an [iBird Gen 1: The First Flight](https://plaza.kabila.app/launchpads/127/ibird-gen-1-the-first-flight) can boost their Threads up to 4 time per month.
- The boosted Threads are given 10 times the normal visibility on the explore feed.

- **Structure**:
  - Message 1: Topic information
    ```
    {
      "Identifier":"iAssets",
      "Type":"Boost",
      "Author": "iAssets",
    }
    ```
  - Message 2: Thread1
    ```
    {
      "Thread": "TopicId1"
    }
    ```
  - Message 3: Thread2
    ```
    {
      "Thread": "TopicId2"
    }

### v0.0.8 (Interactive Polls)

- Users can create interactive polls on their threads. These polls help gather feedback, spark discussions, or make democratic decisions within communities.
- Polls have a defined start and an end date, with users being able to vote only within this timeframe.
- Upon poll conclusion, an immutable record is created displaying the final results.

- **Structure**:
  - Message 1: Topic information
    ```
    {
      "Identifier":"iAssets",
      "Type":"Thread",
      "Author": "iAssets",
    }
    ```
  - Message 2: User creates a poll
    ```
        {
        "Poll": {
            "Title": "Favourite crypto?"
            "Options": ["Bitcoin", "Ethereum", "Other"],
            "Start_Time": "2023-11-11T13:34:56Z",
            "End_Time": "2023-12-11T13:34:56Z"
        }
        }
    ```

  - Message 3: User votes
      ```
        {
          "Author": "AccountId",
          "Vote": "Bitcoin"
        }
      ```

  - Message 4: Poll concludes
    ```
    {
      "Poll_Result": {
          "Title": "Favourite crypto?",
          "Votes": {
              "Bitcoin": 10,
              "Ethereum": 5,
              "Other": 2
          },
          "End_Time": "2023-12-11T13:34:56Z"
      }
    }
    ```

### v0.0.9 (iOS and Android Applications)
The platform now offers dedicated mobile applications for both iOS and Android devices, enhancing user accessibility and engagement.

## Technology Stack

In order to create a highly interactive social media platform on Hedera Hashgraph, we have chosen the following technology stack:

### Front-End 

- **React JS**: A popular JavaScript library for building seamless user interfaces. This technology empowers developers to create complex UIs with ease, that are fast, scalable, and simple.

- **Tailwind CSS**: A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup. This allows for a highly customizable, low-level CSS framework that gives the developer complete control over the designs.

### Back-End

- **Hedera Consensus Service (HCS)**: Hedera Consensus Service (HCS) is a feature provided by the Hedera Hashgraph Network, which is a public distributed ledger famed for rapid transaction processing and airtight, asynchronous Byzantine Fault Tolerant consensus algorithm. 

Key features of the HCS include: 

- **Speed**: HCS can handle an extremely high throughput of transactions—tens of thousands per second in a single network shard. This makes it an excellent choice for applications requiring fast, efficient consensus.

- **Security**: Thanks to the hashgraph consensus algorithm, HCS is asynchronous Byzantine Fault Tolerant (aBFT), the highest level of security achievable for distributed systems. This makes it robust against bad actors and fault-tolerant to ensure accurate and swift consensus.

- **Fairness**: It incorporates fair timestamping and transaction ordering, preventing any single party from unfairly influencing the transaction order.

HCS acts as a decentralized back-end service in the iBird project, ensuring secure and trustworthy social media interactions. It brings the attributes of speed, security, and fairness from the hashgraph algorithm to applications or distributed systems requiring verifiable, ordered events..

### To-Do List

This document outlines the main steps we need to carry out to move our project forward. This is a living document and will be updated as we make progress and refine our plans. Each step is marked as an unresolved checkbox, which we will be checking off as we complete each task.

## Phase 1: Project Foundations
- [x] Set up version control system (GitHub repository)
- [x] Design the structure of the application
- [x] Determine technology stack to be used for development

## Phase 2: Development
- [ ] Implement the base structure of the application
    - [ ] Set up boilerplate code and directories
    - [ ] Determine and implement main classes or components
    - [ ] Establish data flow and state management within the application
- [ ] Build out the user interface
    - [ ] Design UI Mockups and layout
    - [ ] Implement static UI elements
    - [ ] Make the UI interactive

## Phase 3: Testing
- [ ] Write unit tests for individual functions or components
- [ ] Write integration tests that cover multiple areas of the application working together
- [ ] Perform end-to-end (E2E) testing
- [ ] Test on multiple platforms and environments (e.g., different browsers and devices)

## Phase 4: Deployment
- [ ] Set up the hosting/server environment
- [ ] Deploy the application to the hosting/server environment
- [ ] Carry out final acceptance testing in live environment

## Phase 5: Maintenance
- [ ] Monitor the performance
- [ ] Fix any bugs
- [ ] Make improvements as necessary
- [ ] Implement user feedback

## Phase 6: Future features and improvements
- [ ] Identify new features to add to the application
- [ ] Prioritize new features, taking into account user feedback and business needs
- [ ] Iterate the phases (Phase 2 to 5) for each of these new features

## Building Together

Project-Harriet is an open-source venture and we appreciate contributions from our community. Feel free to participate in the project, propose improvements, or raise issues. Whether you're making changes to the existing code or suggesting new features, your contribution will shape the future!

## License

This project is anchored by the  Creative Commons Attribution-NonCommercial 4.0 International Public License - see the [LICENSE](LICENSE.md) file for details.
