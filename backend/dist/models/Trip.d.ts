import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    userId: mongoose.Types.ObjectId;
    destination: string;
    durationDays: number;
    budgetTier: "Low" | "Medium" | "High";
    interests: string[];
    itinerary: mongoose.Types.DocumentArray<{
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }, {}, {}> & {
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }>;
    currency: string;
    estimatedBudget: {
        activities: number;
        transport: number;
        accommodation: number;
        food: number;
        total: number;
    };
    hotels: mongoose.Types.DocumentArray<{
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }, {}, {}> & {
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }>;
    packingList: mongoose.Types.DocumentArray<{
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }, {}, {}> & {
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }>;
    status: "draft" | "completed";
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    destination: string;
    durationDays: number;
    budgetTier: "Low" | "Medium" | "High";
    interests: string[];
    itinerary: mongoose.Types.DocumentArray<{
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }, {}, {}> & {
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }>;
    currency: string;
    estimatedBudget: {
        activities: number;
        transport: number;
        accommodation: number;
        food: number;
        total: number;
    };
    hotels: mongoose.Types.DocumentArray<{
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }, {}, {}> & {
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }>;
    packingList: mongoose.Types.DocumentArray<{
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }, {}, {}> & {
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }>;
    status: "draft" | "completed";
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    userId: mongoose.Types.ObjectId;
    destination: string;
    durationDays: number;
    budgetTier: "Low" | "Medium" | "High";
    interests: string[];
    itinerary: mongoose.Types.DocumentArray<{
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }, {}, {}> & {
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }>;
    currency: string;
    estimatedBudget: {
        activities: number;
        transport: number;
        accommodation: number;
        food: number;
        total: number;
    };
    hotels: mongoose.Types.DocumentArray<{
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }, {}, {}> & {
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }>;
    packingList: mongoose.Types.DocumentArray<{
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }, {}, {}> & {
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }>;
    status: "draft" | "completed";
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    userId: mongoose.Types.ObjectId;
    destination: string;
    durationDays: number;
    budgetTier: "Low" | "Medium" | "High";
    interests: string[];
    itinerary: mongoose.Types.DocumentArray<{
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }, {}, {}> & {
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }>;
    currency: string;
    estimatedBudget: {
        activities: number;
        transport: number;
        accommodation: number;
        food: number;
        total: number;
    };
    hotels: mongoose.Types.DocumentArray<{
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }, {}, {}> & {
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }>;
    packingList: mongoose.Types.DocumentArray<{
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }, {}, {}> & {
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }>;
    status: "draft" | "completed";
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    destination: string;
    durationDays: number;
    budgetTier: "Low" | "Medium" | "High";
    interests: string[];
    itinerary: mongoose.Types.DocumentArray<{
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }, {}, {}> & {
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }>;
    currency: string;
    estimatedBudget: {
        activities: number;
        transport: number;
        accommodation: number;
        food: number;
        total: number;
    };
    hotels: mongoose.Types.DocumentArray<{
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }, {}, {}> & {
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }>;
    packingList: mongoose.Types.DocumentArray<{
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }, {}, {}> & {
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }>;
    status: "draft" | "completed";
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    userId: mongoose.Types.ObjectId;
    destination: string;
    durationDays: number;
    budgetTier: "Low" | "Medium" | "High";
    interests: string[];
    itinerary: mongoose.Types.DocumentArray<{
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }, {}, {}> & {
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }>;
    currency: string;
    estimatedBudget: {
        activities: number;
        transport: number;
        accommodation: number;
        food: number;
        total: number;
    };
    hotels: mongoose.Types.DocumentArray<{
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }, {}, {}> & {
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }>;
    packingList: mongoose.Types.DocumentArray<{
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }, {}, {}> & {
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }>;
    status: "draft" | "completed";
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    userId: mongoose.Types.ObjectId;
    destination: string;
    durationDays: number;
    budgetTier: "Low" | "Medium" | "High";
    interests: string[];
    itinerary: mongoose.Types.DocumentArray<{
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }, {}, {}> & {
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }>;
    currency: string;
    estimatedBudget: {
        activities: number;
        transport: number;
        accommodation: number;
        food: number;
        total: number;
    };
    hotels: mongoose.Types.DocumentArray<{
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }, {}, {}> & {
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }>;
    packingList: mongoose.Types.DocumentArray<{
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }, {}, {}> & {
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }>;
    status: "draft" | "completed";
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: mongoose.Types.ObjectId;
    destination: string;
    durationDays: number;
    budgetTier: "Low" | "Medium" | "High";
    interests: string[];
    itinerary: mongoose.Types.DocumentArray<{
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }, {}, {}> & {
        dayNumber: number;
        activities: mongoose.Types.DocumentArray<{
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }, {}, {}> & {
            title: string;
            estimatedCost: number;
            description?: string | null;
            timeOfDay?: "Morning" | "Afternoon" | "Evening" | null;
        }>;
    }>;
    currency: string;
    estimatedBudget: {
        activities: number;
        transport: number;
        accommodation: number;
        food: number;
        total: number;
    };
    hotels: mongoose.Types.DocumentArray<{
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }, {}, {}> & {
        name: string;
        pricePerNight: number;
        rating?: number | null;
    }>;
    packingList: mongoose.Types.DocumentArray<{
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }, {}, {}> & {
        item: string;
        isPacked: boolean;
        category?: "Documents" | "Clothing" | "Electronics" | "Weather" | "Activities" | "Other" | null;
    }>;
    status: "draft" | "completed";
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=Trip.d.ts.map