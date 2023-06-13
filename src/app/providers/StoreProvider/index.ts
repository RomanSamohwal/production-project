import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore } from './config/store';
import type {
    ReduxStoreWithManager,
    StateSchema,
    StateSchemaKey,
    ThunkConfig,
} from './config/StateSchema';

export type { AppDispatch } from './config/store';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    ThunkConfig,
    StateSchemaKey,
};
