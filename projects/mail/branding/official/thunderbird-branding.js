/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Default start page
pref("mailnews.start_page.url","about:logopage");

// start page override to load after an update
pref("mailnews.start_page.override_url","about:logopage");

// Interval: Time between checks for a new version (in seconds)
// nightly=8 hours, official=24 hours
pref("app.update.interval", 28800);

// The time interval between the downloading of mar file chunks in the
// background (in seconds)
pref("app.update.download.backgroundInterval", 60);

// Give the user x seconds to react before showing the big UI. default=24 hours
pref("app.update.promptWaitTime", 86400);

pref("app.vendorURL", "http://binaryoutcast.com/projects/interlink/");

// Release notes URL
pref("app.releaseNotesURL", "http://binaryoutcast.com/projects/interlink/");

// Base URL for web-based support pages.
pref("app.support.baseURL", "http://binaryoutcast.com/interact/");
