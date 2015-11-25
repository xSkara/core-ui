/**
 * Developer: Grigory Kuznetsov
 * Date: 22.07.2015
 * Copyright: 2009-2015 Comindware®
 *       All Rights Reserved
 *
 * THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF Comindware
 *       The copyright notice above does not evidence any
 *       actual or intended publication of such source code.
 */

/* global define, require, Handlebars, Backbone, Marionette, $, _, Localizer */

define(['../../list/views/RowView', './behaviors/NativeGridItemViewBehavior'],
    function (RowView, NativeGridItemViewBehavior) {
        'use strict';

        return RowView.extend({
            behaviors: {
                NativeGridItemViewBehavior: {
                    behaviorClass: NativeGridItemViewBehavior,
                    padding: 15
                }
            }
        });
    });