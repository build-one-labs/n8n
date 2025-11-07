#!/bin/bash

# images
cp -f .automation-hub/custom/assets/* packages/editor-ui/public 

# scss
.automation-hub/custom/replace.sh .automation-hub/custom/css/_primitives.ini packages/design-system/src/css/_primitives.scss
.automation-hub/custom/replace.sh .automation-hub/custom/css/_tokens.ini packages/design-system/src/css/_tokens.scss

# packages/editor-ui/index.html
sed -i "s|<title>n8n.io - Workflow Automation</title>|<title>Build.one - Automation Hub</title>|" "packages/editor-ui/index.html"

# packages/editor-ui/src/composables/useTitleChange.ts
sed -i "s|n8n - \${icon} \${workflow}|Build.one - Automation Hub - \${icon} \${workflow}|" "packages/editor-ui/src/composables/useTitleChange.ts"
sed -i "s|n8n - Workflow Automation|Build.one - Automation Hub|" "packages/editor-ui/src/composables/useTitleChange.ts"

# packages/editor-ui/src/plugins/i18n/locales/en.json
sed -i "s| n8n | Build.one - Automation Hub |g" "packages/editor-ui/src/plugins/i18n/locales/en.json"
sed -i "s| n8n\"| Build.one - Automation Hub\"|g" "packages/editor-ui/src/plugins/i18n/locales/en.json"
sed -i "s|\"n8n|\"Build.one - Automation Hub|g" "packages/editor-ui/src/plugins/i18n/locales/en.json"
sed -i "s|on n8n.io|on Build.one - Automation Hub|g" "packages/editor-ui/src/plugins/i18n/locales/en.json"
sed -i "s|version of n8n|version of Build.one - Automation Hub|g" "packages/editor-ui/src/plugins/i18n/locales/en.json"
sed -i "s|How did you hear about n8n|How did you hear about Build.one - Automation Hub|g" "packages/editor-ui/src/plugins/i18n/locales/en.json"
sed -i "s|n8n should reconnect automatically|Build.one - Automation Hub should reconnect automatically|g" "packages/editor-ui/src/plugins/i18n/locales/en.json"
sed -i "s|and restart n8n.|and restart Build.one - Automation Hub.|g" "packages/editor-ui/src/plugins/i18n/locales/en.json"
sed -i "s|your evaluation of n8n|your evaluation of Build.one - Automation Hub|g" "packages/editor-ui/src/plugins/i18n/locales/en.json"
sed -i "s|longer have access to n8n|longer have access to Build.one - Automation Hub|g" "packages/editor-ui/src/plugins/i18n/locales/en.json"
sed -i "s|unique identifier in n8n.|unique identifier in Build.one - Automation Hub.|g" "packages/editor-ui/src/plugins/i18n/locales/en.json"

