import { BarcodeFormat, MultiFormatReader } from '@zxing/library';
import AbstractBlackBoxSpec from '../../../common/AbstractBlackBox';

/*
 * Copyright (C) 2012 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * These authors would like to acknowledge the Spanish Ministry of Industry,
 * Tourism and Trade, for the support in the project TSI020301-2008-2
 * "PIRAmIDE: Personalizable Interactions with Resources on AmI-enabled
 * Mobile Dynamic Environments", led by Treelogic
 * ( http://www.treelogic.com/ ):
 *
 *   http://www.piramidepse.com/
 */

// package com.google.zxing.oned.rss.expanded;

// import com.google.zxing.BarcodeFormat;
// import com.google.zxing.MultiFormatReader;
// import com.google.zxing.common.AbstractBlackBoxTestCase;

/**
 * A test of {@link RSSExpandedReader} against a fixed test set of images including
 * stacked RSS barcodes.
 */
class RSSExpandedStackedBlackBox1TestCase extends AbstractBlackBoxSpec {

  public constructor() {
    super('src/test/resources/blackbox/rssexpandedstacked-1', new MultiFormatReader(), BarcodeFormat.RSS_EXPANDED);
    this.addTest(60, 65, 0.0);
    this.addTest(60, 65, 180.0);
  }

}

describe('RSSExpandedStackedBlackBox1TestCase', () => {
  it('testBlackBox', async () => {
    const test = new RSSExpandedStackedBlackBox1TestCase();
    await test.testBlackBox();
  });
});
