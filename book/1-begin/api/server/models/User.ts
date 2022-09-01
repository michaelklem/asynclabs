import * as mongoose from 'mongoose';

const mongoSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: String,
  avatarUrl: String,
});

/*
  We defined the UserModel interface as an object with two methods. The first method is called getUserBySlug. This method takes the argument slug, finds a User Document by this slug, and then returns that User Document. The second method is called updateProfile. This method takes 3 arguments (userId ,name, avatarUrl), finds a User Document by id, updates this User Document, and then returns the updated User Document.
*/
interface UserDocument extends mongoose.Document {
  slug: string;
  createdAt: Date;
  email: string;
  displayName: string;
  avatarUrl: string;
}

interface UserModel extends mongoose.Model<UserDocument> {
  getUserBySlug({ slug }: { slug: string }): Promise<UserDocument>;

  updateProfile({
    userId,
    name,
    avatarUrl,
  }: {
    userId: string;
    name: string;
    avatarUrl: string;
  }): Promise<UserDocument[]>;
}


class UserClass extends mongoose.Model {
  public static async getUserBySlug({ slug }) {
    console.log('Static method');
    return this.findOne({ slug }, 'email displayName').setOptions({ lean: true });
  }

  public static async updateProfile({ userId, name, avatarUrl }) {
    const user = await this.findById(userId, 'slug displayName');

    const modifier = { displayName: user.displayName, avatarUrl, slug: user.slug };

    if (name !== user.displayName) {
      modifier.displayName = name;
      modifier.slug = name;
    }

    return this.findByIdAndUpdate(userId, { $set: modifier }, { new: true, runValidators: true })
      .select('displayName avatarUrl slug')
      .setOptions({ lean: true });
  }
}

mongoSchema.loadClass(UserClass);


const User = mongoose.model<UserDocument, UserModel>('User', mongoSchema);

export default User;