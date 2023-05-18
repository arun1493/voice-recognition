import { PubSub } from "@google-cloud/pubsub";

class PubSubService {
  pubSubClient: PubSub;
  pubSubTopicName: string;

  constructor(topic: string) {
    this.pubSubClient = new PubSub();
    this.pubSubTopicName = topic;
    this.createPubSubTopicIfNeeded();
  }

  isTopicExist = async () => {
    const topic = this.pubSubClient.topic(this.pubSubTopicName);
    try {
      const topicExist = await topic.exists();
      return topicExist[0];
    } catch (err) {
      throw err;
    }
  };

  createPubSubTopicIfNeeded = async () => {
    try {
      const isTopicExists = await this.isTopicExist();
      if (!isTopicExists) {
        const topicCreateResponse = await this.createTopic();
      } else {
        console.log(`Topic exist with name ${this.pubSubTopicName}`);
      }
    } catch (err) {
      console.log(`Failed to create topic with error message = ${err.message}`);
      throw err;
    }
  };

  createTopic = async () => {
    try {
      const topicCreateResponse = await this.pubSubClient.createTopic(this.pubSubTopicName);
      console.log(`Created topic successfully with topic name ${this.pubSubTopicName}`);
      return topicCreateResponse;
    } catch (err) {
      throw err;
    }
  };

  publishMessage = async (message: string) => {
    try {
      const dataBuffer = Buffer.from(message);
      const messageId = await this.pubSubClient.topic(this.pubSubTopicName).publishMessage({ data: dataBuffer });
      return messageId;
    } catch (err) {
      throw err;
    }
  };
}

export default PubSubService;
