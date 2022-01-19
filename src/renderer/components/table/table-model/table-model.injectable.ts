/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable, lifecycleEnum } from "@ogre-tools/injectable";
import createStorageInjectable from "../../../utils/create-storage/create-storage.injectable";
import { TableModel, TableStorageModel } from "./table-model";

const tableModelInjectable = getInjectable({
  instantiate: (di) => {
    const createStorage = di.inject(createStorageInjectable);

    const storage = createStorage<TableStorageModel>("table_settings", {
      sortParams: {},
    });

    return new TableModel({
      storage,
    });
  },

  lifecycle: lifecycleEnum.singleton,
});

export default tableModelInjectable;