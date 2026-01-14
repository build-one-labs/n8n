## [2.3.4](https://github.com/n8n-io/n8n/compare/n8n@2.3.3...n8n@2.3.4) (2026-01-13)


### Bug Fixes

* Fix CLI import ([#24215](https://github.com/n8n-io/n8n/issues/24215)) ([cb3ccb9](https://github.com/n8n-io/n8n/commit/cb3ccb9a59561218d36ccee9ff9baedc85ea4c18))



## [2.3.3](https://github.com/n8n-io/n8n/compare/n8n@2.3.2...n8n@2.3.3) (2026-01-13)


### Bug Fixes

* **core:** Sanitize filenames for file operations ([#23988](https://github.com/n8n-io/n8n/issues/23988)) ([30791da](https://github.com/n8n-io/n8n/commit/30791da0ad00efa8b823ea093f3640b2b244780f))



## [2.3.2](https://github.com/n8n-io/n8n/compare/n8n@2.3.1...n8n@2.3.2) (2026-01-09)


### Bug Fixes

* **ai-builder:** Call onGenerationSuccess callback in multi-agent workflow ([#24086](https://github.com/n8n-io/n8n/issues/24086)) ([be0edb8](https://github.com/n8n-io/n8n/commit/be0edb852db553d25370a819ed9e3eefff4e5aeb))



## [2.3.1](https://github.com/n8n-io/n8n/compare/n8n@2.3.0...n8n@2.3.1) (2026-01-07)


### Bug Fixes

* Bump versions for qs/langchain ([#23939](https://github.com/n8n-io/n8n/issues/23939)) ([84d86b1](https://github.com/n8n-io/n8n/commit/84d86b1d51e680259f3667dc9f322be0461767b2))
* **core:** Avoid copying execution data table on AddWorkflowVersionIdToExecutionData migration ([#23901](https://github.com/n8n-io/n8n/issues/23901)) ([26aef2a](https://github.com/n8n-io/n8n/commit/26aef2ae6b7975767e118153048d4e4c7ed34bb9))
* **core:** Fix redirection of user missing MFA to personal settings ([#23881](https://github.com/n8n-io/n8n/issues/23881)) ([b630551](https://github.com/n8n-io/n8n/commit/b630551cb079a5522bf861cd447d52490e19a96f))
* **Data Table Node:** Fix issue with insert and update operation ([#23936](https://github.com/n8n-io/n8n/issues/23936)) ([23908a7](https://github.com/n8n-io/n8n/commit/23908a7a33ac73e6327c3a84ff8c1a7558690328))
* **McpClientTool Node:** Sanitize MCP tool arguments based on schema ([#23167](https://github.com/n8n-io/n8n/issues/23167)) ([33ee325](https://github.com/n8n-io/n8n/commit/33ee3252b90e58c3b5ade696133dca1c7cba5967))



# [2.3.0](https://github.com/n8n-io/n8n/compare/n8n@2.2.0...n8n@2.3.0) (2026-01-05)


### Bug Fixes

* Add data insight metadata  migration ([#23694](https://github.com/n8n-io/n8n/issues/23694)) ([3aeb040](https://github.com/n8n-io/n8n/commit/3aeb0402ff8663c6a62c4550da221a0e2491e676))
* **AI Agent Node:** Fix toolInput field in intermediateSteps output ([#23767](https://github.com/n8n-io/n8n/issues/23767)) ([ae2e7a8](https://github.com/n8n-io/n8n/commit/ae2e7a8260baafe59da323ef6e3da267b33996e1))
* **AI Agent Node:** Store AI agent tool calls as native LangChain messages ([#23687](https://github.com/n8n-io/n8n/issues/23687)) ([daa81a1](https://github.com/n8n-io/n8n/commit/daa81a18e8aa5ec10b9fb12c03ff4d0baa41781a))
* **ai-builder:** Improve handling of max recursion errors ([#23606](https://github.com/n8n-io/n8n/issues/23606)) ([9329d55](https://github.com/n8n-io/n8n/commit/9329d55c644fd756c16e25b95c8ea3819a5987ce))
* **core:**  Modify path validation to work cross platforms ([#23737](https://github.com/n8n-io/n8n/issues/23737)) ([35d110f](https://github.com/n8n-io/n8n/commit/35d110fbc76307b08fc74c7f3bfc6cdde5ebb687))
* **core:** Fix CORS issue in waiting webhook responses ([#23697](https://github.com/n8n-io/n8n/issues/23697)) ([23ae22b](https://github.com/n8n-io/n8n/commit/23ae22bab2c8b2a0eaf93321a919d2bb668058f8))
* **core:** Fix race condition in executions pruning on leadership change ([#23575](https://github.com/n8n-io/n8n/issues/23575)) ([3af145e](https://github.com/n8n-io/n8n/commit/3af145ec71b8f990fcfdf6bee85314b2ca2362ce))
* **core:** Node feature flags supported in canvas status icon  ([#23300](https://github.com/n8n-io/n8n/issues/23300)) ([3e80bdb](https://github.com/n8n-io/n8n/commit/3e80bdb85ac864976f426de704ad9f55ede8a8aa))
* **core:** Validate missing `code` param in Code node ([#23405](https://github.com/n8n-io/n8n/issues/23405)) ([c7fed98](https://github.com/n8n-io/n8n/commit/c7fed985634dd8c0072d67fdb83d899ead0d92b3))
* **editor:** Add `defaultLocale` to public settings ([#23134](https://github.com/n8n-io/n8n/issues/23134)) ([1dd0fac](https://github.com/n8n-io/n8n/commit/1dd0fac24e3a383752c5cf99ec7b327fbee1189c))
* **editor:** Allow moving workflows on the overview page ([#21742](https://github.com/n8n-io/n8n/issues/21742)) ([5b5867f](https://github.com/n8n-io/n8n/commit/5b5867fd53941bf210beb0e5561ceffba795271e))
* **editor:** Correct hosted chat font family defaults ([#23718](https://github.com/n8n-io/n8n/issues/23718)) ([b59fad7](https://github.com/n8n-io/n8n/commit/b59fad72549d8aadb8b7f43014edfab8ed5ab917))
* **editor:** Fix chat message action icons visibility in dark mode ([#23444](https://github.com/n8n-io/n8n/issues/23444)) ([fc8b667](https://github.com/n8n-io/n8n/commit/fc8b667b4d90120500465f232a1df90eaab14c34))
* **editor:** Fix NDV state getting stale when navigating using the floating buttons ([#23717](https://github.com/n8n-io/n8n/issues/23717)) ([06eef00](https://github.com/n8n-io/n8n/commit/06eef008b3f7dd01e989d99203f9bf982e410589))
* **editor:** Fix VersionUpdateCTA disabled state ([#23722](https://github.com/n8n-io/n8n/issues/23722)) ([0bee0a5](https://github.com/n8n-io/n8n/commit/0bee0a54537cdc30f1630bc43a7c1cba5fd5e33d))
* **editor:** Keep focus in canvas chat after sending a message ([#23719](https://github.com/n8n-io/n8n/issues/23719)) ([b6bc146](https://github.com/n8n-io/n8n/commit/b6bc1466377ceaed4ee85bdf2ff87f2f16bf7e17))
* **editor:** Logs not showing tool usage correctly for sub-agents ([#23860](https://github.com/n8n-io/n8n/issues/23860)) ([d99a07e](https://github.com/n8n-io/n8n/commit/d99a07ef69dd1c946781e1d5a53bd277b16e5294))
* **editor:** Remove arbitrary maxlength restriction from data table n… ([#23242](https://github.com/n8n-io/n8n/issues/23242)) ([229024f](https://github.com/n8n-io/n8n/commit/229024ff4ed8f2e8b2ab59d12a747db85e9caea7))
* **editor:** Sub node's input not shown when its root node finished with an error ([#23770](https://github.com/n8n-io/n8n/issues/23770)) ([b113694](https://github.com/n8n-io/n8n/commit/b11369487a6cb26bdd1ca26b2da77f11012c778c))
* **Github Node:** Handle binary data in all modes by converting to base64 ([#23497](https://github.com/n8n-io/n8n/issues/23497)) ([c96534f](https://github.com/n8n-io/n8n/commit/c96534f9ae6a08193b4ab2db3a2cf840e43656ed))
* **n8n Form Trigger Node:** Add support for fieldName in JSON config ([#23491](https://github.com/n8n-io/n8n/issues/23491)) ([50573e0](https://github.com/n8n-io/n8n/commit/50573e05be340134e66c45f37536166749219a95))
* **Redis Node:** Fix reconnect strategy to prevent infinite reconnect attempts ([#22526](https://github.com/n8n-io/n8n/issues/22526)) ([e75cf6b](https://github.com/n8n-io/n8n/commit/e75cf6bc6c269954e783ee8353a74a2070680aaf))
* Return null if no last successful execution exists instead of 404 ([#23720](https://github.com/n8n-io/n8n/issues/23720)) ([9339d14](https://github.com/n8n-io/n8n/commit/9339d14f6fb4c039c9973719a1da63794b2f4da2))
* **Stripe Trigger Node:** Add Stripe signature verification ([#22764](https://github.com/n8n-io/n8n/issues/22764)) ([f816b39](https://github.com/n8n-io/n8n/commit/f816b39070d9010c8eaaa152482b29bf85fc01dc))
* **Structured Output Parser Node:** Fix parsing of JSON with markdown code segments ([#23726](https://github.com/n8n-io/n8n/issues/23726)) ([e5c7d43](https://github.com/n8n-io/n8n/commit/e5c7d434fd8bcc86cb48605134192114d8afaa07))


### Features

* Add instance id to ai assistant service client ([#23474](https://github.com/n8n-io/n8n/issues/23474)) ([74b552d](https://github.com/n8n-io/n8n/commit/74b552d5bde4e7afb53c0b293b53a48b56957a2e))
* **ai-builder:** Improve generation across data_transformation category ([#23609](https://github.com/n8n-io/n8n/issues/23609)) ([1199904](https://github.com/n8n-io/n8n/commit/1199904b15964a35cebaa6814d56aba5a9ecf761))
* **API:** Add patch method for credentials public API ([#23431](https://github.com/n8n-io/n8n/issues/23431)) ([750e9a8](https://github.com/n8n-io/n8n/commit/750e9a84705f737f470b0cfbef70b7b600073adb))
* **core:** Introduce WorkflowHistory compaction service ([#23238](https://github.com/n8n-io/n8n/issues/23238)) ([e9e480b](https://github.com/n8n-io/n8n/commit/e9e480bb8efc052b627ff887b2ea16b07a707bd2))
* **core:** Use draft sub-workflow version for manual execution, published for production ([#23166](https://github.com/n8n-io/n8n/issues/23166)) ([9fc820f](https://github.com/n8n-io/n8n/commit/9fc820fbaf6172652bad099717b6ed20b7829124))
* **Data Table Node:** Add data table crud operations to data table node ([#22951](https://github.com/n8n-io/n8n/issues/22951)) ([36d5eaf](https://github.com/n8n-io/n8n/commit/36d5eaf927df51cb8a06abd73a6f03bc73484e70))
* **editor:** Add `Stop All Executions` functionality ([#23576](https://github.com/n8n-io/n8n/issues/23576)) ([5b76f49](https://github.com/n8n-io/n8n/commit/5b76f49a89b5145aea6d8f8f07ec4c92a2b21df2))
* **editor:** Add/remove files in editing ChatHub chat message ([#23541](https://github.com/n8n-io/n8n/issues/23541)) ([33d0c74](https://github.com/n8n-io/n8n/commit/33d0c74b0f2e726607d02c38d4a5d171c16f15a9))
* **Form Node:** Dynamic attributes in form editor ([#23433](https://github.com/n8n-io/n8n/issues/23433)) ([921d3f2](https://github.com/n8n-io/n8n/commit/921d3f24db404efb17caa39db95a4d62b121c7b4))
* Gracefully handle non string values for external secrets redaction ([#23849](https://github.com/n8n-io/n8n/issues/23849)) ([77f1dd6](https://github.com/n8n-io/n8n/commit/77f1dd6ceabdb01a8819dda43bec77ffb752d380))
* Use hardended docker images ([#23480](https://github.com/n8n-io/n8n/issues/23480)) ([430b823](https://github.com/n8n-io/n8n/commit/430b82309f11d6a5b0c738d22cbb62d0ac2497c5))
* **Weaviate Node:** Hybrid Search Support ([#23252](https://github.com/n8n-io/n8n/issues/23252)) ([0edb607](https://github.com/n8n-io/n8n/commit/0edb607c78f3365486f69630dddfcd48f94913d6))
* Workflows imported with separate option now validate before insertion ([#23843](https://github.com/n8n-io/n8n/issues/23843)) ([77890ce](https://github.com/n8n-io/n8n/commit/77890ce287c7f456f8fa850f42beebaae156b62c))



# [2.2.0](https://github.com/n8n-io/n8n/compare/n8n@2.1.0...n8n@2.2.0) (2025-12-22)


### Bug Fixes

* **ai-builder:** Allow running `get-node-examples` tool in parallel ([#23473](https://github.com/n8n-io/n8n/issues/23473)) ([041a39b](https://github.com/n8n-io/n8n/commit/041a39b083e2bb17017bc45ffc0bd28dd2ba7a0c))
* **ai-builder:** Connection validation respects node version and type ([#23349](https://github.com/n8n-io/n8n/issues/23349)) ([0bd7a94](https://github.com/n8n-io/n8n/commit/0bd7a94d0ca1c2bb16e6e03cd0f44d81d99184d5))
* **Basic LLM Chain Node:** Support ResponsesApi and OpenAI tools ([#22936](https://github.com/n8n-io/n8n/issues/22936)) ([3b694a6](https://github.com/n8n-io/n8n/commit/3b694a6c79fbb5251d2a37263fc9aa6e914f56d3))
* **core:** Add isToolExecution method to context classes and update HttpRequestV3 to conditionally show hints ([#23143](https://github.com/n8n-io/n8n/issues/23143)) ([07a1a4e](https://github.com/n8n-io/n8n/commit/07a1a4e656df85e33fc28d338ff0b1a4fcc24ff4))
* **core:** Check mime type when restoring attachments in chat memory ([#23287](https://github.com/n8n-io/n8n/issues/23287)) ([5c3b7b6](https://github.com/n8n-io/n8n/commit/5c3b7b6186c63b50b1dcbd4fa21eecbd705899e0))
* **core:** Ensure runner does not terminate pipe reader prematurely ([#23448](https://github.com/n8n-io/n8n/issues/23448)) ([93bb0c5](https://github.com/n8n-io/n8n/commit/93bb0c5399dc56254a03e2a4f25ad40171c9312c))
* **core:** Error running evaluations in queue mode ([#23248](https://github.com/n8n-io/n8n/issues/23248)) ([d9d5a01](https://github.com/n8n-io/n8n/commit/d9d5a01ca57954ca7a02a5272c3fa8035cde3936))
* **core:** Fix access control checks for displaying workflow and execution links on Chat hub ([#23524](https://github.com/n8n-io/n8n/issues/23524)) ([240f10a](https://github.com/n8n-io/n8n/commit/240f10a6ede3311d126f48fe0a1573c4ec71dad0))
* **core:** Fix Ollama models support on Chat hub ([#23458](https://github.com/n8n-io/n8n/issues/23458)) ([0611184](https://github.com/n8n-io/n8n/commit/0611184beeb803d1c6e07b94c865af8ba0a3a58f))
* **core:** Fix verified community packages reinstall ([#23428](https://github.com/n8n-io/n8n/issues/23428)) ([6b6b828](https://github.com/n8n-io/n8n/commit/6b6b828e96fbb5895d7c7ecfdc7490fd5e5bea18))
* **core:** Preserve AI tool input/output data on execution error ([#23292](https://github.com/n8n-io/n8n/issues/23292)) ([e861344](https://github.com/n8n-io/n8n/commit/e861344f5b1705f3e79fda8fd83bafaa1f431031))
* **core:** Skip saving workflow statistics on 'chat' executions ([#23465](https://github.com/n8n-io/n8n/issues/23465)) ([2868d1b](https://github.com/n8n-io/n8n/commit/2868d1bab7f24e8e7af7b55027fbb8ffad21a053))
* Don't encrypt state for hooks calls ([#23357](https://github.com/n8n-io/n8n/issues/23357)) ([c739d33](https://github.com/n8n-io/n8n/commit/c739d33903999f0187f8c629c2a94538a66973b2))
* **editor:** Allow space key in input fields when holding shift ([#23153](https://github.com/n8n-io/n8n/issues/23153)) ([9cfd6e5](https://github.com/n8n-io/n8n/commit/9cfd6e5678dd7d33653b8aa1079d7bbb9be86875))
* **editor:** Fix navigation menu layout ([#23271](https://github.com/n8n-io/n8n/issues/23271)) ([a211e62](https://github.com/n8n-io/n8n/commit/a211e62b507447ece88313022d5f9e11ce871877))
* **editor:** Fix placeholder telemetry event triggering too many times ([#23454](https://github.com/n8n-io/n8n/issues/23454)) ([2837869](https://github.com/n8n-io/n8n/commit/283786917d38de030f145fa6e11b52b70fb643a8))
* **editor:** Fix wf nodes not updated correctly on workflow activated/deactivated events ([#23333](https://github.com/n8n-io/n8n/issues/23333)) ([ffbf66e](https://github.com/n8n-io/n8n/commit/ffbf66e7191520b69ebc21de4c33e508942769b5))
* **editor:** Implement node position checks and overlap detection for canvas operations ([#22536](https://github.com/n8n-io/n8n/issues/22536)) ([09566a0](https://github.com/n8n-io/n8n/commit/09566a0dd45e157ef99df186e6a56506d8c0f303))
* **editor:** Not close publish modal when clicking outside ([#23240](https://github.com/n8n-io/n8n/issues/23240)) ([9c19072](https://github.com/n8n-io/n8n/commit/9c19072ece347706ef239e379df19245ea636f27))
* **editor:** Preserve AI Builder chat state when switching routes during streaming ([#23442](https://github.com/n8n-io/n8n/issues/23442)) ([99f398e](https://github.com/n8n-io/n8n/commit/99f398e46edbacf018545c90713958c367b096ed))
* **editor:** Prevent Reka UI from interfering with Element Plus dropdown selections ([#23370](https://github.com/n8n-io/n8n/issues/23370)) ([f700aff](https://github.com/n8n-io/n8n/commit/f700aff583f73499bf0abb659d913a43bffd3cec))
* **editor:** Previous message does not exist error when sending chat message ([#23298](https://github.com/n8n-io/n8n/issues/23298)) ([04636cc](https://github.com/n8n-io/n8n/commit/04636cc365f0344a30da400087fdb1f4ee5a16f5))
* **editor:** Remove running tool messages when AI builder task fails ([#23437](https://github.com/n8n-io/n8n/issues/23437)) ([da9014f](https://github.com/n8n-io/n8n/commit/da9014faeb0a37b9dde9a6bd3d1c66f91581c701))
* **editor:** Restore correct node icon colors in nodes panel ([#23152](https://github.com/n8n-io/n8n/issues/23152)) ([ed65ef9](https://github.com/n8n-io/n8n/commit/ed65ef9231a5775e8f812c0054071f6dac829bc8))
* **editor:** Select default Chat hub model to use from models allowed by settings ([#23348](https://github.com/n8n-io/n8n/issues/23348)) ([804a007](https://github.com/n8n-io/n8n/commit/804a007377b513961c62b54f94a2c9508c126848))
* **Embeddings OpenAI Node:** Validate embedding inputs to prevent undefined errors ([#23328](https://github.com/n8n-io/n8n/issues/23328)) ([eb3b771](https://github.com/n8n-io/n8n/commit/eb3b77146f3cf1a85ffaf468a5fe0e2b01361112))
* Extracts data from PDF without memory issues ([#23309](https://github.com/n8n-io/n8n/issues/23309)) ([b0c3c39](https://github.com/n8n-io/n8n/commit/b0c3c39d1f92c5384a675f350ab3fb6f0b25bbb2))
* Fix broken route for variables notification toast on pull ([#23339](https://github.com/n8n-io/n8n/issues/23339)) ([fc2bdd3](https://github.com/n8n-io/n8n/commit/fc2bdd328bb9b77a2e939d69cd03344dbec40f9e))
* **Guardrails Node:** Handle Unicode characters ([#21807](https://github.com/n8n-io/n8n/issues/21807)) ([238a8fe](https://github.com/n8n-io/n8n/commit/238a8fe1e096e97acb3d9589dcb6ab42863cccd6))
* Handle nodes with missing type field in ActivateExecuteWorkflowTriggerWorkflows migration ([#23392](https://github.com/n8n-io/n8n/issues/23392)) ([538181c](https://github.com/n8n-io/n8n/commit/538181cbe32a92616df5e00d7ffaf4d568557f4f))
* Limit access to files based on regex pattern ([#23413](https://github.com/n8n-io/n8n/issues/23413)) ([e22acaa](https://github.com/n8n-io/n8n/commit/e22acaab3dcb2004e5fe0bf9ef2db975bde61866))
* Lint error needs to be hovered not the text ([#23310](https://github.com/n8n-io/n8n/issues/23310)) ([864095b](https://github.com/n8n-io/n8n/commit/864095bc77c52fdda4f9c57ff00863d7b576651d))
* **Microsoft OneDrive Node:** Don't overwrite filename from node parameters when uploading binary file ([#22949](https://github.com/n8n-io/n8n/issues/22949)) ([6ae4999](https://github.com/n8n-io/n8n/commit/6ae4999ef99310d39c43cde611966875787b331b))
* **n8n Form Node:** Restores executions status check for waiting forms  ([#23452](https://github.com/n8n-io/n8n/issues/23452)) ([bded5f5](https://github.com/n8n-io/n8n/commit/bded5f58b2817407db092defd882deaf3f3d1198))
* Only support specified git config keys in Git node ([#23264](https://github.com/n8n-io/n8n/issues/23264)) ([8382e27](https://github.com/n8n-io/n8n/commit/8382e27c5a25e1e289a5fabfd616a5e1809b3330))
* **Phantombuster Node:** Don't send empty objects in request ([#22303](https://github.com/n8n-io/n8n/issues/22303)) ([cec256f](https://github.com/n8n-io/n8n/commit/cec256f1242feff602f938dc71ab58642e82ea8e))
* **Postgres Node:** Add Continue on Error support for type validation errors in RMC ([#23235](https://github.com/n8n-io/n8n/issues/23235)) ([3aeb247](https://github.com/n8n-io/n8n/commit/3aeb247bf2248878baf6d0b67e6377929cd151a9))
* Sharepoint file selection correctly applies filter ([#23155](https://github.com/n8n-io/n8n/issues/23155)) ([e0ab5ba](https://github.com/n8n-io/n8n/commit/e0ab5ba45ab01ae047eafa844fd16c06e828c09e))
* **Webhook Node:** Use CIDR matching for IP whitelist check ([#23399](https://github.com/n8n-io/n8n/issues/23399)) ([11f8597](https://github.com/n8n-io/n8n/commit/11f8597d4ad69ea3b58941573997fdbc4de1fec5))


### Features

* **ai-builder:** Add support for versioning in ai-builder ([#23060](https://github.com/n8n-io/n8n/issues/23060)) ([5818d58](https://github.com/n8n-io/n8n/commit/5818d58588b0e9d3bf11e5f9fd727f9c1d211a31))
* **ai-builder:** Multi-agent workflow builder improvements, best practices and better template usage ([#23417](https://github.com/n8n-io/n8n/issues/23417)) ([94dd47b](https://github.com/n8n-io/n8n/commit/94dd47b6376a6ebbbf99dd83c3b5f250e6cbdb3c))
* All requests to OpenAI include a platform header ([#23463](https://github.com/n8n-io/n8n/issues/23463)) ([f971567](https://github.com/n8n-io/n8n/commit/f9715674e4133f28f37d74816238dfaa131fbb73))
* Assign default project admin on pull ([#23355](https://github.com/n8n-io/n8n/issues/23355)) ([d5c0934](https://github.com/n8n-io/n8n/commit/d5c093411aa4f643c46c062a41740f10e72b324a))
* **core:** Add dedicated workflow:publish project scope to use instead of the generic workflow:update ([#23289](https://github.com/n8n-io/n8n/issues/23289)) ([011c4bb](https://github.com/n8n-io/n8n/commit/011c4bba12717cb80c6410e00266a1a03bcd256d))
* **core:** Add log streaming events for 2FA enable/disable ([#23302](https://github.com/n8n-io/n8n/issues/23302)) ([ca96ffc](https://github.com/n8n-io/n8n/commit/ca96ffc8047150898dbe17b4baa69f0aa864a81b))
* **core:** Add log streaming events for variables ([#23425](https://github.com/n8n-io/n8n/issues/23425)) ([150d16d](https://github.com/n8n-io/n8n/commit/150d16d410c2d7e8f2da391e19f66282510909ee))
* **core:** Add options necessary for AWS elasticache cluster with TLS ([#23274](https://github.com/n8n-io/n8n/issues/23274)) ([2565757](https://github.com/n8n-io/n8n/commit/256575745d09f647af8d499bfcb18a81b4b355b1))
* **core:** Add workflow activation events to log streaming ([#23251](https://github.com/n8n-io/n8n/issues/23251)) ([42effef](https://github.com/n8n-io/n8n/commit/42effef53814c77af5558e0ae45d3f87e1a6eec2))
* **core:** Add workflow settings to log streaming ([#23294](https://github.com/n8n-io/n8n/issues/23294)) ([4ece6dc](https://github.com/n8n-io/n8n/commit/4ece6dc4c82baf6af3fffe06f2be0fb597fc1700))
* **core:** Change data table size limit refresh rate from 60 to 5 seconds ([#22852](https://github.com/n8n-io/n8n/issues/22852)) ([8457373](https://github.com/n8n-io/n8n/commit/84573738b5021661f133fe3a36ea2d67bba0bd9f))
* **editor:** Connect workflows from MCP settings page ([#23025](https://github.com/n8n-io/n8n/issues/23025)) ([a84b0e5](https://github.com/n8n-io/n8n/commit/a84b0e544d150392c29cdfa845e708eb1b69a3bf))
* **editor:** Group sub-node execution errors with same messages inside a tooltip ([#23402](https://github.com/n8n-io/n8n/issues/23402)) ([378a32f](https://github.com/n8n-io/n8n/commit/378a32f3d33ccac344a0531fd21f1bbd1f3626a2))
* **editor:** Update Chat sidebar to match v2 styles ([#23267](https://github.com/n8n-io/n8n/issues/23267)) ([9bebbab](https://github.com/n8n-io/n8n/commit/9bebbab3db77da2f047b386e345ce12da14d6e35))
* Support dynamic credentials in oauth refresh ([#23225](https://github.com/n8n-io/n8n/issues/23225)) ([0f17bef](https://github.com/n8n-io/n8n/commit/0f17bef1a08a618066998b1ac564a7b80ac65c4c))



# [2.1.0](https://github.com/n8n-io/n8n/compare/n8n@2.0.0...n8n@2.1.0) (2025-12-15)


### Bug Fixes

* Add `HOME` env var to distroless runners image ([#22796](https://github.com/n8n-io/n8n/issues/22796)) ([064f90c](https://github.com/n8n-io/n8n/commit/064f90ce1e25c75eca30f3bd4ac932560e50e67d))
* Add version history records when importing workflows ([#22974](https://github.com/n8n-io/n8n/issues/22974)) ([50e337f](https://github.com/n8n-io/n8n/commit/50e337f0ba2265f991abcef0e5237937e2a4a8cf))
* **AI Agent Node:** Handle continueOnFail for maxIterations correctly ([#23218](https://github.com/n8n-io/n8n/issues/23218)) ([95af975](https://github.com/n8n-io/n8n/commit/95af975a37dc3c483e21773f7896d742cbbe97f5))
* **AI Agent Node:** Support thinking mode for Anthropic models ([#22585](https://github.com/n8n-io/n8n/issues/22585)) ([07be71b](https://github.com/n8n-io/n8n/commit/07be71bf743aa9cdd58721d852864eaa18f9fc0f))
* **AI Agent Tool Node:** Implement version 3 for agent tool node ([#22587](https://github.com/n8n-io/n8n/issues/22587)) ([ebca18b](https://github.com/n8n-io/n8n/commit/ebca18b70944f8aad0945574ddc79fb481293c06))
* AI session metadata call fix ([#22775](https://github.com/n8n-io/n8n/issues/22775)) ([7091bc7](https://github.com/n8n-io/n8n/commit/7091bc780632fbbefaa66097f2c8f7f3289e69c3))
* **ai-builder:** Fix error message for large context windows ([#23135](https://github.com/n8n-io/n8n/issues/23135)) ([f987817](https://github.com/n8n-io/n8n/commit/f987817300597b72f89b77bdc40183725392316e))
* **ai-builder:** Hide execute and refine button when there's no trigger ([#23144](https://github.com/n8n-io/n8n/issues/23144)) ([2c7bd9a](https://github.com/n8n-io/n8n/commit/2c7bd9ac11aefd17e9f5d1d89b6fab4b32fb0995))
* **ai-builder:** Only tidy up nodes if a new node is added ([#22514](https://github.com/n8n-io/n8n/issues/22514)) ([1a342fc](https://github.com/n8n-io/n8n/commit/1a342fce56030376947769844eaf2915d8c75e32))
* **ai-builder:** Refresh license in sdk when renewed ([#22969](https://github.com/n8n-io/n8n/issues/22969)) ([776152d](https://github.com/n8n-io/n8n/commit/776152dbe368de0c4d84987c1db3cf8db36b24ff))
* **ai-builder:** Updating stream recursion limit and removing tool node static parameter validation ([#23023](https://github.com/n8n-io/n8n/issues/23023)) ([c3190fc](https://github.com/n8n-io/n8n/commit/c3190fcfec22f0b4cb3ab9e117adb509844b9307))
* Allow negative numbers when parsing objects from string ([#22937](https://github.com/n8n-io/n8n/issues/22937)) ([cf6f75b](https://github.com/n8n-io/n8n/commit/cf6f75b8dd5a091511a325a3c73435e3e464967f))
* **API:** Fixes how toJsonSchema creates dependant allOf checks when multiple fields depend on same field ([#23114](https://github.com/n8n-io/n8n/issues/23114)) ([957ebef](https://github.com/n8n-io/n8n/commit/957ebef54e41929e890d6e807bbe5318a8eb7ea1))
* Backfill missing workflow history records ([#23070](https://github.com/n8n-io/n8n/issues/23070)) ([5074c99](https://github.com/n8n-io/n8n/commit/5074c992c742a40a398ca30035eb4eeac1c76faf))
* **Chat Trigger Node:** Fix file upload with streaming in public chat ([#23138](https://github.com/n8n-io/n8n/issues/23138)) ([49a709b](https://github.com/n8n-io/n8n/commit/49a709b5e3c7dd07f0d8847873395feb51ec08df))
* **core, editor:** Move single webhook trigger check to the backend ([#22450](https://github.com/n8n-io/n8n/issues/22450)) ([3026a81](https://github.com/n8n-io/n8n/commit/3026a813b0ca1872a9ccc14ab85cefd5dfcfa080))
* **core:** Add missing env vars to internal mode ([#22965](https://github.com/n8n-io/n8n/issues/22965)) ([7e08952](https://github.com/n8n-io/n8n/commit/7e0895245547c4b6e5a726d4b91f9edee78a805a))
* **core:** Allowlist `HOME` env var in JS runner config ([#22839](https://github.com/n8n-io/n8n/issues/22839)) ([fb9f913](https://github.com/n8n-io/n8n/commit/fb9f913492ea61d9d11b80d8e4b8394a3cd4795b))
* **core:** Do not prevent credential save if property has default value ([#22720](https://github.com/n8n-io/n8n/issues/22720)) ([9913991](https://github.com/n8n-io/n8n/commit/9913991d208ac0c2a666927790f8fa96e9fd6f69))
* **core:** Don't resume parent workflow when the child workflow goes into waiting ([#22964](https://github.com/n8n-io/n8n/issues/22964)) ([37d2d46](https://github.com/n8n-io/n8n/commit/37d2d46267723159ee935d300780cee940831d23))
* **core:** During partial execution don't include loop as start node if the loop isn't closed ([#22555](https://github.com/n8n-io/n8n/issues/22555)) ([803ab42](https://github.com/n8n-io/n8n/commit/803ab421648171d8b7909694597e560244e1cefa))
* **core:** Fix html header check ([#22713](https://github.com/n8n-io/n8n/issues/22713)) ([553b244](https://github.com/n8n-io/n8n/commit/553b24458ea780dc4e5d63b2db51fb5466ea13ea))
* **core:** Hide migration rule issues not relevant to cloud ([#22749](https://github.com/n8n-io/n8n/issues/22749)) ([ad56240](https://github.com/n8n-io/n8n/commit/ad56240013187e31baf4fd19df5f154c7b3d1673))
* **core:** Make workers memory constraints more container aware ([#22698](https://github.com/n8n-io/n8n/issues/22698)) ([99c30ed](https://github.com/n8n-io/n8n/commit/99c30edf1da2e3886fd2e2ca60139907e2e4438c))
* **core:** Move subworfklow binary duplication to workflowExecuteAfter before execution cleaning ([#22390](https://github.com/n8n-io/n8n/issues/22390)) ([0e0410c](https://github.com/n8n-io/n8n/commit/0e0410c97a320fcf05fbbc19ae49711ad0dafb6b))
* **core:** Only resolve the filepath once ([#22767](https://github.com/n8n-io/n8n/issues/22767)) ([fc93272](https://github.com/n8n-io/n8n/commit/fc932720213fb3e8d74864f9f00e900d6d927255))
* **core:** Prevent execution data from being overwritten on manual workflow resume ([#22665](https://github.com/n8n-io/n8n/issues/22665)) ([85e204c](https://github.com/n8n-io/n8n/commit/85e204c64fbc2d0a308ad6ea86625e6f4bc92690))
* **core:** Reload external secrets settings and providers from db on pubsub event ([#23045](https://github.com/n8n-io/n8n/issues/23045)) ([74ede64](https://github.com/n8n-io/n8n/commit/74ede64bdc0cdea1604417aaace615f82067e4fc))
* **core:** Support lowercase proxy environment variables ([#21201](https://github.com/n8n-io/n8n/issues/21201)) ([d42654f](https://github.com/n8n-io/n8n/commit/d42654ff3f7619d60e45482657f3f1e2592cc079))
* **core:** Throw error when workflow is too big for webhook registration ([#21860](https://github.com/n8n-io/n8n/issues/21860)) ([fd08baf](https://github.com/n8n-io/n8n/commit/fd08baf14159c50b5c3d8bf2df5cbcbc662f9919))
* **core:** Use the structured destination node in test webhook registration ([#22456](https://github.com/n8n-io/n8n/issues/22456)) ([b8fa03b](https://github.com/n8n-io/n8n/commit/b8fa03bf6d545dc19856a244fa86a9cd05644b31))
* **core:** Workflow diff preview errors out in push dialog for workflow that's newly created ([#22861](https://github.com/n8n-io/n8n/issues/22861)) ([b8d433f](https://github.com/n8n-io/n8n/commit/b8d433f3bf41f4aa9280dac4dd691839dad8cf2e))
* **Data Table Node:** Convert dates to ISO strings in the output ([#23123](https://github.com/n8n-io/n8n/issues/23123)) ([a3971d8](https://github.com/n8n-io/n8n/commit/a3971d8b72835deedec69e099d1af790da3594a3))
* Duplicate selector in workflow settings ([#22984](https://github.com/n8n-io/n8n/issues/22984)) ([87f6b51](https://github.com/n8n-io/n8n/commit/87f6b51de3bc8a35ba11167b64a1be0b2d47d5ea))
* **editor:** Align execute button in modal when executing tools ([#22588](https://github.com/n8n-io/n8n/issues/22588)) ([f482809](https://github.com/n8n-io/n8n/commit/f482809f916aa45b7bb4623faab5cdb0e60d258c))
* **editor:** Allow running webhook workflow even when a node has error ([#22239](https://github.com/n8n-io/n8n/issues/22239)) ([94137d0](https://github.com/n8n-io/n8n/commit/94137d08dbfc227f84526a6937ebaec0de6f5ccb))
* **editor:** Cannot close focus tab in version tab ([#23071](https://github.com/n8n-io/n8n/issues/23071)) ([90c2d2e](https://github.com/n8n-io/n8n/commit/90c2d2ea7060f3cd7539cd3fd6158f97f9f915d4))
* **editor:** Cannot copy JSON in log view for sub executions ([#23117](https://github.com/n8n-io/n8n/issues/23117)) ([e77037c](https://github.com/n8n-io/n8n/commit/e77037c0be536ea1a7698fc05f3d1884e5910f47))
* **editor:** Clear sticky notifications when leaving workflow ([#23067](https://github.com/n8n-io/n8n/issues/23067)) ([9677c5f](https://github.com/n8n-io/n8n/commit/9677c5f00ac4bcf9bd7a6fe7949b4b0569b617c7))
* **editor:** Column order in workflow UNION query to fix sorting ([#22026](https://github.com/n8n-io/n8n/issues/22026)) ([9a2f2e7](https://github.com/n8n-io/n8n/commit/9a2f2e77aaa88b4a4c0d6eba5b4f1f274374682b))
* **editor:** Disable noImplicitAny in typescript plugin ([#22104](https://github.com/n8n-io/n8n/issues/22104)) ([c43543f](https://github.com/n8n-io/n8n/commit/c43543fb8431aa678a54183954af6269976b924b))
* **editor:** Disable publish button when no changes ([#23137](https://github.com/n8n-io/n8n/issues/23137)) ([e391a28](https://github.com/n8n-io/n8n/commit/e391a2830b32a22c8d04aedf96e449ce77b135d7))
* **editor:** Don't create duplicate placeholder nodes on agent failure ([#22715](https://github.com/n8n-io/n8n/issues/22715)) ([599c6eb](https://github.com/n8n-io/n8n/commit/599c6ebe98c39b4ad35405d56d5722960318a676))
* **editor:** Don't show unnecessary callout when submitting a chat message ([#23207](https://github.com/n8n-io/n8n/issues/23207)) ([be29a4c](https://github.com/n8n-io/n8n/commit/be29a4c230edd0e544105dcafc2cd3ba29d30c55))
* **editor:** External link aligned to the right in resource locator ([#22631](https://github.com/n8n-io/n8n/issues/22631)) ([c088840](https://github.com/n8n-io/n8n/commit/c08884052ef0e28384d9d2581d9a13cbedd2076c))
* **editor:** Fix correct $fromAi expression showing as error ([#22711](https://github.com/n8n-io/n8n/issues/22711)) ([f2eb85d](https://github.com/n8n-io/n8n/commit/f2eb85dc081934cad857108c2359aeac2b461b52))
* **editor:** Fix project selector scroll ([#22728](https://github.com/n8n-io/n8n/issues/22728)) ([c5a31a3](https://github.com/n8n-io/n8n/commit/c5a31a3be868d49eb29bb6eca87cbce9a62f75be))
* **editor:** Fix scope based - move nodes and node pasting ([#22608](https://github.com/n8n-io/n8n/issues/22608)) ([d4d7cb7](https://github.com/n8n-io/n8n/commit/d4d7cb776f73c61266c4f0b0effda759dcd88685))
* **editor:** Fix style of concurrent execution header ([#23118](https://github.com/n8n-io/n8n/issues/23118)) ([dcc41a1](https://github.com/n8n-io/n8n/commit/dcc41a1b3fa3b3f8aed047626b5d2c0de9d17190))
* **editor:** Make sure when you duplicate a workflow MCP is disabled ([#22784](https://github.com/n8n-io/n8n/issues/22784)) ([2f78ed9](https://github.com/n8n-io/n8n/commit/2f78ed9718617c805db9513209c41ebd7a9dd97e))
* **editor:** Model selector dropdown menu in chat closes too eagerly ([#23058](https://github.com/n8n-io/n8n/issues/23058)) ([2eecc8f](https://github.com/n8n-io/n8n/commit/2eecc8f11dec7b43fd346b9f349e11c0fa59113c))
* **editor:** Preserve expression in webhook path when duplicating a workflow ([#23140](https://github.com/n8n-io/n8n/issues/23140)) ([ec0c87d](https://github.com/n8n-io/n8n/commit/ec0c87dc32ca40a85eb5fa1a1a067fe2af028b53))
* **editor:** Propagate last successful execution to expression edit modal ([#22666](https://github.com/n8n-io/n8n/issues/22666)) ([ec8ed89](https://github.com/n8n-io/n8n/commit/ec8ed892739de0964892b92db190048ff9a8a43d))
* **editor:** Remove fallback model connection when disabled in root node ([#23089](https://github.com/n8n-io/n8n/issues/23089)) ([8c7267f](https://github.com/n8n-io/n8n/commit/8c7267f347f98fcbb4b780da685d12ac783854ee))
* **editor:** Rename active with publish for workflows ([#23111](https://github.com/n8n-io/n8n/issues/23111)) ([88b29bb](https://github.com/n8n-io/n8n/commit/88b29bb957eca7b0d2919d2d82d69f26f28d8ec3))
* **editor:** Restore workflow tool `view-execution` link for V3 Agents ([#22730](https://github.com/n8n-io/n8n/issues/22730)) ([feab6d3](https://github.com/n8n-io/n8n/commit/feab6d3f3451684f39b5bb0bd84b3c84a61f58f7))
* **editor:** Show node settings in protected view for read-only review ([#23009](https://github.com/n8n-io/n8n/issues/23009)) ([b420987](https://github.com/n8n-io/n8n/commit/b420987e53b8dc143c69e7aea0e2c5f69defe54f))
* **editor:** Update credential sharing tooltip ([#23095](https://github.com/n8n-io/n8n/issues/23095)) ([e47c435](https://github.com/n8n-io/n8n/commit/e47c435ae89acba616d56ba4654e9d677e5d922f))
* **editor:** Update the value of updated at on data changes ([#22634](https://github.com/n8n-io/n8n/issues/22634)) ([f5d144c](https://github.com/n8n-io/n8n/commit/f5d144cfafdf346c965d9b86c65e98df447ef698))
* **editor:** Workflow sharing modal 'no users found' message ([#23213](https://github.com/n8n-io/n8n/issues/23213)) ([69cb29c](https://github.com/n8n-io/n8n/commit/69cb29c5326e7f560d9c2426f279f4e5a06cfba1))
* **Evaluation Node:** Docs link falls back to default ([#23130](https://github.com/n8n-io/n8n/issues/23130)) ([a2fd770](https://github.com/n8n-io/n8n/commit/a2fd77076388180c4861fb0965e4d0aaae782037))
* Fix checksum hashing when WebCrypto is unavailable ([#23024](https://github.com/n8n-io/n8n/issues/23024)) ([34260fe](https://github.com/n8n-io/n8n/commit/34260fe4befe4bbebeaa02dc4b6e7fac92c69f5f))
* Fix error branching in Set Node ([#23127](https://github.com/n8n-io/n8n/issues/23127)) ([f2d5cdf](https://github.com/n8n-io/n8n/commit/f2d5cdfc9fcc2b599ea04df818b4171d73c371f4))
* **Form Node:** Remove uploaded files from tmp ([#22873](https://github.com/n8n-io/n8n/issues/22873)) ([15a8e1b](https://github.com/n8n-io/n8n/commit/15a8e1b567981b7700aa9df4c97555321734b1c9))
* **Guardrails Node:** Remove Guardrails from "Source for Prompt" ([#22435](https://github.com/n8n-io/n8n/issues/22435)) ([f20420e](https://github.com/n8n-io/n8n/commit/f20420e36f8a8170f33db33943cda57c3560a4c1))
* Harden form and trigger response handling ([#23061](https://github.com/n8n-io/n8n/issues/23061)) ([c9abeff](https://github.com/n8n-io/n8n/commit/c9abeff5e36936739ff95b5be811de22060f0523))
* Improve schema preview handling for trigger nodes ([#23126](https://github.com/n8n-io/n8n/issues/23126)) ([6ac5ee7](https://github.com/n8n-io/n8n/commit/6ac5ee72b580fb6b06b31ab03585d08f154face2))
* Improve webhook trigger node tests ([#23187](https://github.com/n8n-io/n8n/issues/23187)) ([d490cc9](https://github.com/n8n-io/n8n/commit/d490cc93f9a4356062c3e5b0cdfd99737ac9f3ea))
* **MCP Client Node:** Make "Use Dynamic Client Registration" toggle not required ([#22645](https://github.com/n8n-io/n8n/issues/22645)) ([5ded4e8](https://github.com/n8n-io/n8n/commit/5ded4e8daddd95f7e257a160089d99464349450b))
* PAY-4074 - Owner registration in multi-main setup ([#22520](https://github.com/n8n-io/n8n/issues/22520)) ([5c76f1e](https://github.com/n8n-io/n8n/commit/5c76f1ec56dea862543c79a06352bbd92ee8afdf))
* **Read/Write Files from Disk Node:** Throw error when file not found, normalize windows path ([#22455](https://github.com/n8n-io/n8n/issues/22455)) ([4df815e](https://github.com/n8n-io/n8n/commit/4df815e6ddba8e74efaf9777d16985a481b04089))
* Reduce OAuth authorization request by excluding shared projects ([#22986](https://github.com/n8n-io/n8n/issues/22986)) ([b916c45](https://github.com/n8n-io/n8n/commit/b916c453c305194d629780e430f350e075ceb68a))
* Remove apk tools from runner image ([#22925](https://github.com/n8n-io/n8n/issues/22925)) ([902e1a8](https://github.com/n8n-io/n8n/commit/902e1a8706615e6fe4ac663cf636d4c3deaeb933))
* Reset git files when push fails  ([#23142](https://github.com/n8n-io/n8n/issues/23142)) ([ce8fc2a](https://github.com/n8n-io/n8n/commit/ce8fc2a4b6b95a84d80f9f4ec28066d811225661))
* **SerpApi Tool Node:** Fix SerpApi tool calling to work with Tools Agent v3 ([#23198](https://github.com/n8n-io/n8n/issues/23198)) ([f248b53](https://github.com/n8n-io/n8n/commit/f248b53e77752a476d0ece30e2a718a21fa93c26))
* **Slack Node:** Rate limit requests in RLC getChannels ([#22149](https://github.com/n8n-io/n8n/issues/22149)) ([756ea6e](https://github.com/n8n-io/n8n/commit/756ea6ec788e6fec032114a8925608f16f9a8e3c))
* Update Node.js version to 22.21.1 ([#23016](https://github.com/n8n-io/n8n/issues/23016)) ([494f9ba](https://github.com/n8n-io/n8n/commit/494f9ba66b22d7b4e7a2a73eb7c2b99727dc1cd1))
* Upgrade urllib3 in runners image  ([#22975](https://github.com/n8n-io/n8n/issues/22975)) ([c6d7423](https://github.com/n8n-io/n8n/commit/c6d74234c6c8f04691076bfdfea0fff1d0e6a77c))
* **Webhook Node:** Assign default binary property names if it's empty or whitespace ([#21857](https://github.com/n8n-io/n8n/issues/21857)) ([cb2ac85](https://github.com/n8n-io/n8n/commit/cb2ac857251721e065614dc65454b0a5c351a06c))


### Features

* Add and update telemetry events ([#22762](https://github.com/n8n-io/n8n/issues/22762)) ([bbdc991](https://github.com/n8n-io/n8n/commit/bbdc99176b1fc8fd5ed909636359e19dcd01d8e4))
* Add Support for AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE (EKS Pod Identity) ([#21584](https://github.com/n8n-io/n8n/issues/21584)) ([dd95858](https://github.com/n8n-io/n8n/commit/dd9585828b2b76002909418509205524d9bd4d90))
* Add support for dynamic credentials to oauth callback ([#23013](https://github.com/n8n-io/n8n/issues/23013)) ([ce317e3](https://github.com/n8n-io/n8n/commit/ce317e30a8b9db2b12b992ae7d6928e50169ffba))
* Add validate identity helper to resolver ([#23068](https://github.com/n8n-io/n8n/issues/23068)) ([9e7fafb](https://github.com/n8n-io/n8n/commit/9e7fafbc24a7d7efbd6ae9492f1b1bf184680eb6))
* **ai-builder:** Add "workflow_modified" to builder end of response telemetry ([#23226](https://github.com/n8n-io/n8n/issues/23226)) ([7a4effa](https://github.com/n8n-io/n8n/commit/7a4effab1eea100cf062a6f7fe56c2190123ed2d))
* **ai-builder:** Add autofocus for input field ([#22919](https://github.com/n8n-io/n8n/issues/22919)) ([a089448](https://github.com/n8n-io/n8n/commit/a08944835d9bf442ae3c70bf92e3030634f0e5fe))
* **ai-builder:** Consolidate builder telemetry ([#22644](https://github.com/n8n-io/n8n/issues/22644)) ([dcbc24d](https://github.com/n8n-io/n8n/commit/dcbc24d3f756d5ce4370bf2277118ee31604d863))
* **ai-builder:** Design updates for workflow builder chat experience ([#22765](https://github.com/n8n-io/n8n/issues/22765)) ([c69a517](https://github.com/n8n-io/n8n/commit/c69a517579753bc5ab08efdbe0cc3305abb52504))
* **ai-builder:** WF builder programmatic validation for HTTP request and set nodes (correct credential usage) ([#22941](https://github.com/n8n-io/n8n/issues/22941)) ([272a5d4](https://github.com/n8n-io/n8n/commit/272a5d44350ff1d78fe067a013dbc71a0c573596))
* Collect dynamic and fixed time saved insights ([#22607](https://github.com/n8n-io/n8n/issues/22607)) ([9245f2d](https://github.com/n8n-io/n8n/commit/9245f2d896b1a68ab4cfd4fe05493db8272f529f))
* **core:** Add breaking change rule for start node deprecation ([#23097](https://github.com/n8n-io/n8n/issues/23097)) ([810edf2](https://github.com/n8n-io/n8n/commit/810edf2df951e83132fda5a34961d4e0e688e6e9))
* **core:** Add Chat commands on command bar ([#23063](https://github.com/n8n-io/n8n/issues/23063)) ([e3da10e](https://github.com/n8n-io/n8n/commit/e3da10e20f430fdd2d9631265cb61a332ea34b2c))
* **core:** Add credential resolver entity for dynamic credential module ([#22609](https://github.com/n8n-io/n8n/issues/22609)) ([a02d7ba](https://github.com/n8n-io/n8n/commit/a02d7ba9d4f06193afae02d83a017ba9a9c2d1ec))
* **core:** Add credential resolver service for CRUD operations ([#22653](https://github.com/n8n-io/n8n/issues/22653)) ([b8d045b](https://github.com/n8n-io/n8n/commit/b8d045b05084b401cf20d094b9d426cb41bcc8c6))
* **core:** Add isResolvable in public and internal APIs ([#23119](https://github.com/n8n-io/n8n/issues/23119)) ([2f329b3](https://github.com/n8n-io/n8n/commit/2f329b38f9f8f3b6c07c56480d15f62222d9f66c))
* **core:** Add new Chat hub feature for chatting with LLMs and your n8n agent workflows ([#23035](https://github.com/n8n-io/n8n/issues/23035)) ([fa1c87f](https://github.com/n8n-io/n8n/commit/fa1c87f503a28dc02bd0363cdce36bf71681946d))
* **core:** Add resolvable fields to credential entity ([#22712](https://github.com/n8n-io/n8n/issues/22712)) ([a19fefe](https://github.com/n8n-io/n8n/commit/a19fefece52eaecba34e38456c5aba47f41d81e3))
* **core:** Add SerpApi Google search support to Chat hub ([#23199](https://github.com/n8n-io/n8n/issues/23199)) ([8619e07](https://github.com/n8n-io/n8n/commit/8619e07ee13e6507a66a5c45ca1966207fa89c19))
* **core:** Add toolCode nodes to the pyodide check for v2 migration ([#22659](https://github.com/n8n-io/n8n/issues/22659)) ([1be7404](https://github.com/n8n-io/n8n/commit/1be7404a7dfee7340f27e791deff7766be7cd324))
* **core:** Add types endpoint to get all credential resolver types ([#22923](https://github.com/n8n-io/n8n/issues/22923)) ([fd7cc85](https://github.com/n8n-io/n8n/commit/fd7cc85f0655af17466c167b1e5e3bf88abf3692))
* **core:** Add workflow cancellation events to log streaming ([#23151](https://github.com/n8n-io/n8n/issues/23151)) ([568dba2](https://github.com/n8n-io/n8n/commit/568dba2c8f84f79ddf6a34ef647382f80ae0e47e))
* **core:** Dynamic credential resolvers API routes ([#22862](https://github.com/n8n-io/n8n/issues/22862)) ([5799cf7](https://github.com/n8n-io/n8n/commit/5799cf712a4e20d122c2f0b0dbadf65cbdd1f6b0))
* **core:** Implement credential resolution service ([#23015](https://github.com/n8n-io/n8n/issues/23015)) ([bc1f238](https://github.com/n8n-io/n8n/commit/bc1f238f2e975886612a1d4d61be304a0e72c6f6))
* **core:** Introduce native Python code tool for AI agent ([#22595](https://github.com/n8n-io/n8n/issues/22595)) ([763b858](https://github.com/n8n-io/n8n/commit/763b858548f72176b8a140189dd7c9b103ad3144))
* **core:** Make chat hub workflows treat activeWorkflowId correctly ([#22546](https://github.com/n8n-io/n8n/issues/22546)) ([d6b9e7c](https://github.com/n8n-io/n8n/commit/d6b9e7c8fb76123e2e881e1113b8241e115a8406))
* **core:** Node feature flags ([#22950](https://github.com/n8n-io/n8n/issues/22950)) ([182313a](https://github.com/n8n-io/n8n/commit/182313a0aca0b2563dcd06c71fa924c4475fe5a5))
* **core:** Use credential entity resolver fields on resolving and storing process ([#23107](https://github.com/n8n-io/n8n/issues/23107)) ([551dbfd](https://github.com/n8n-io/n8n/commit/551dbfde24808a21e7e2216b2492474cf66a455f))
* Dynamic credentials authorization endpoint for oauth2 ([#22944](https://github.com/n8n-io/n8n/issues/22944)) ([5214afa](https://github.com/n8n-io/n8n/commit/5214afa686b35fd347a0b5a136026eb978233d48))
* **editor:** Add credentials resolvers list UI ([#23082](https://github.com/n8n-io/n8n/issues/23082)) ([08754cb](https://github.com/n8n-io/n8n/commit/08754cbeb258f55ccbaebf19c0b6839338dc0785))
* **editor:** Add JS method aliases ([#21799](https://github.com/n8n-io/n8n/issues/21799)) ([1b256cc](https://github.com/n8n-io/n8n/commit/1b256ccc52dffb59a5233a5d9f456cd314b23668))
* **editor:** Edit workflow descriptions from the MCP page ([#22967](https://github.com/n8n-io/n8n/issues/22967)) ([1c2e89f](https://github.com/n8n-io/n8n/commit/1c2e89fa52c831ba08d95495d58cb0df79c71189))
* **editor:** First shot at adding a dynamic credential section on the credential modal ([#22983](https://github.com/n8n-io/n8n/issues/22983)) ([e59be66](https://github.com/n8n-io/n8n/commit/e59be66c8b6fba6492914e39868e65b081c19e2e))
* **editor:** Implement modal to edit/create credential resolver, and resolver workflow settings ([#22977](https://github.com/n8n-io/n8n/issues/22977)) ([432545a](https://github.com/n8n-io/n8n/commit/432545a4c805e9406b2d5e92a52d73716c75279a))
* **editor:** Improve node component visual states ([#20242](https://github.com/n8n-io/n8n/issues/20242)) ([25043d3](https://github.com/n8n-io/n8n/commit/25043d35c11abb03bc2e3043d1a880b5af61d4fd))
* **editor:** Move workflow description edit button to settings ([#22301](https://github.com/n8n-io/n8n/issues/22301)) ([492aca0](https://github.com/n8n-io/n8n/commit/492aca09ff399dc1648797a358c8f15665cb2977))
* **editor:** Redesign MCP settings page ([#22677](https://github.com/n8n-io/n8n/issues/22677)) ([40ff047](https://github.com/n8n-io/n8n/commit/40ff0479a8219aa548092bc2e9df3095d012290f))
* **editor:** Rename columns in data tables ([#21747](https://github.com/n8n-io/n8n/issues/21747)) ([b226547](https://github.com/n8n-io/n8n/commit/b22654709acb3d81e84e6cac1145e359941db991))
* **editor:** UI improvements for credential resolver modal ([#23027](https://github.com/n8n-io/n8n/issues/23027)) ([9bffc72](https://github.com/n8n-io/n8n/commit/9bffc72c8cc4b1389b4924a2ae5edd549308e086))
* Enable time saved node for testing ([#22650](https://github.com/n8n-io/n8n/issues/22650)) ([c57052a](https://github.com/n8n-io/n8n/commit/c57052a1dabe4e2f4077dab5e5df025c3655b239))
* Fix types, add resolver id to csrf state ([#23087](https://github.com/n8n-io/n8n/issues/23087)) ([3ced9b3](https://github.com/n8n-io/n8n/commit/3ced9b3cc37ef620b01a46c56032301a60fd6003))
* **Form Node:** Split form name and label ([#22304](https://github.com/n8n-io/n8n/issues/22304)) ([271a9dd](https://github.com/n8n-io/n8n/commit/271a9dd2181e163a4fcd72d995598bb0e48ccee8))
* **FTP Node:** Add timeout option ([#21868](https://github.com/n8n-io/n8n/issues/21868)) ([d710895](https://github.com/n8n-io/n8n/commit/d710895dc09c02bd47f80b856ed402f3c00ed8f9))
* **Google Gemini Node:** Ability to create a file store and upload files to it ([#22988](https://github.com/n8n-io/n8n/issues/22988)) ([c4d6502](https://github.com/n8n-io/n8n/commit/c4d6502b05bab7b6152e3198df43de1d799c033f))
* **Google Gemini Node:** Introduce built-in Gemini tools ([#22454](https://github.com/n8n-io/n8n/issues/22454)) ([f830447](https://github.com/n8n-io/n8n/commit/f8304472f859dd24b278acb78ef600e344ee0772))
* Make underlying oauth abstractions more generic ([#22741](https://github.com/n8n-io/n8n/issues/22741)) ([5926ebf](https://github.com/n8n-io/n8n/commit/5926ebf0940d3483665f06cdd0e0ee2465ff53fb))
* Support oauth1 authorization for dynamic credentials ([#22972](https://github.com/n8n-io/n8n/issues/22972)) ([0a56a56](https://github.com/n8n-io/n8n/commit/0a56a56dc5adfced06623eecdded7c49ba40300f))



# [2.0.0](https://github.com/n8n-io/n8n/compare/n8n@2.0.0-rc.3...n8n@2.0.0) (2025-12-08)


### Bug Fixes

* Add `HOME` env var to distroless runners image ([#22796](https://github.com/n8n-io/n8n/issues/22796)) ([2cf1021](https://github.com/n8n-io/n8n/commit/2cf10216bd396118eb170f237b918df5850a3402))
* **core:** Allowlist `HOME` env var in JS runner config ([#22839](https://github.com/n8n-io/n8n/issues/22839)) ([a31ca3d](https://github.com/n8n-io/n8n/commit/a31ca3d19052f7fdecb1c2ed9a81e15ff9bd14b6))
* **core:** Do not prevent credential save if property has default value ([#22720](https://github.com/n8n-io/n8n/issues/22720)) ([03744c3](https://github.com/n8n-io/n8n/commit/03744c30c59b96a8ad67d8d6b321e0f7ff0571e2))
* **core:** Update migration that activate workflows with executeWorkflowTrigger ([#22860](https://github.com/n8n-io/n8n/issues/22860)) ([f7cb18c](https://github.com/n8n-io/n8n/commit/f7cb18ce3853a1813646460fc472b0d20f482a53))
* **editor:** Bind color-scheme to app theme setting ([#22774](https://github.com/n8n-io/n8n/issues/22774)) ([3d46b97](https://github.com/n8n-io/n8n/commit/3d46b97bdf1c01852998ce5a5eb4631fe990d268))
* **editor:** Design tweaks for publish modals ([#22694](https://github.com/n8n-io/n8n/issues/22694)) ([98efa19](https://github.com/n8n-io/n8n/commit/98efa19ca4d9cf17c88a3778c00fea45caa54738))
* Fetch workflow before updating checksum ([#22927](https://github.com/n8n-io/n8n/issues/22927)) ([2260953](https://github.com/n8n-io/n8n/commit/22609531c39dce6477123734f68a53d932a26d8b))
* Security patches ([#22748](https://github.com/n8n-io/n8n/issues/22748)) ([d22c173](https://github.com/n8n-io/n8n/commit/d22c173aec9f990f1912450399eea29893e62d24))
* Security patches for jws ([#22918](https://github.com/n8n-io/n8n/issues/22918)) ([a642722](https://github.com/n8n-io/n8n/commit/a642722115a011f16292074833d47bee540a34b2))
* Update checksum after restoring workflow ([#22920](https://github.com/n8n-io/n8n/issues/22920)) ([207c3f8](https://github.com/n8n-io/n8n/commit/207c3f8ba81e9c5b2148278f7def492b4789d2dc))


### Features

* Validate nodes before activating ([#22916](https://github.com/n8n-io/n8n/issues/22916)) ([1aa325a](https://github.com/n8n-io/n8n/commit/1aa325a64f26a8b377cee341df7486dcedd535b2))



# [2.0.0-rc.3](https://github.com/n8n-io/n8n/compare/n8n@2.0.0-rc.2...n8n@2.0.0-rc.3) (2025-12-04)


### Bug Fixes

* **core:** Address review feedback for sub-workflow wait fix ([#22745](https://github.com/n8n-io/n8n/issues/22745)) ([ce64032](https://github.com/n8n-io/n8n/commit/ce6403262badd93ccde1a254f71631adc2176886))


### Features

* **editor:** Improve node component visual states ([#20242](https://github.com/n8n-io/n8n/issues/20242)) ([3fc1c56](https://github.com/n8n-io/n8n/commit/3fc1c566a468509c758bd0800b30f3a47d981b4c))



# [2.0.0-rc.2](https://github.com/n8n-io/n8n/compare/n8n@2.0.0-rc.1...n8n@2.0.0-rc.2) (2025-12-04)


### Bug Fixes

* **core:** Prevent execution data from being overwritten on manual workflow resume ([#22665](https://github.com/n8n-io/n8n/issues/22665)) ([f603bc8](https://github.com/n8n-io/n8n/commit/f603bc891f68d3779b4a8efaf667311afe38f2c9))



# [2.0.0-rc.1](https://github.com/n8n-io/n8n/compare/n8n@2.0.0-rc.0...n8n@2.0.0-rc.1) (2025-12-04)


### Bug Fixes

* **core:** Make sub-workflows with waits return correct data to parents ([#22611](https://github.com/n8n-io/n8n/issues/22611)) ([14205dc](https://github.com/n8n-io/n8n/commit/14205dc0c6ae15b1329e46584c6b472100fe0ad5))


### Features

* **core:** Block access to env in code and expressions by default ([#22643](https://github.com/n8n-io/n8n/issues/22643)) ([0ffd760](https://github.com/n8n-io/n8n/commit/0ffd76093c2e9b62098e14dc7e402f727e14e027))
* **core:** Introduce native Python code tool for AI agent ([#22658](https://github.com/n8n-io/n8n/issues/22658)) ([b1bc778](https://github.com/n8n-io/n8n/commit/b1bc7786d860d0b9e02fbda3604a979ed8d39f3d))
* **editor:** Sidebar redesign ([#22395](https://github.com/n8n-io/n8n/issues/22395)) ([0ba2043](https://github.com/n8n-io/n8n/commit/0ba2043047dadfdccf96b30f5653886430d7eb54))



# [2.0.0-rc.0](https://github.com/n8n-io/n8n/compare/n8n@1.122.0...n8n@2.0.0-rc.0) (2025-12-02)


### Bug Fixes


### Features



# [1.123.0](https://github.com/n8n-io/n8n/compare/n8n@1.122.0...n8n@1.123.0) (2025-12-01)


### Bug Fixes

* **AI Agent Node:** Unify memory management for streaming/non-streaming ([#22243](https://github.com/n8n-io/n8n/issues/22243)) ([df81c77](https://github.com/n8n-io/n8n/commit/df81c77a248136b141e2324036cc8ecdc41f3590))
* **ai-builder:** Fix import of multiple nodes with maxNode, add validation ([#22348](https://github.com/n8n-io/n8n/issues/22348)) ([4319da6](https://github.com/n8n-io/n8n/commit/4319da6f1cc1421285ada04551969a170ca5c518))
* **ai-builder:** Keep existing pin data when modifying the workflow ([#22266](https://github.com/n8n-io/n8n/issues/22266)) ([83ea8e1](https://github.com/n8n-io/n8n/commit/83ea8e1f91c5ee07fee89e39743b3c39bbd479db))
* Bump node-forge and body-parser ([#22418](https://github.com/n8n-io/n8n/issues/22418)) ([3c0e809](https://github.com/n8n-io/n8n/commit/3c0e809e416569c64d3c5e96c4c5f5f84b15e255))
* **core, editor:** Support inclusive and exclusive destination node mode in the frontend and API ([#22244](https://github.com/n8n-io/n8n/issues/22244)) ([344c909](https://github.com/n8n-io/n8n/commit/344c90940e7e75ddaeba5e23c0953feebb7aa98e))
* **core:** Add missing workflowId when creating base subworkflowworkflow additional data ([#22312](https://github.com/n8n-io/n8n/issues/22312)) ([8f6c3b2](https://github.com/n8n-io/n8n/commit/8f6c3b2dce25fde6c64a04b85179d829d1d45feb))
* **core:** Add response validation for requests during DCR ([#22076](https://github.com/n8n-io/n8n/issues/22076)) ([9ab9d1c](https://github.com/n8n-io/n8n/commit/9ab9d1c8f1fd4e65e9a7924f5d7bc3925b024261))
* **core:** Defer requirements check for Python runner in internal mode ([#22448](https://github.com/n8n-io/n8n/issues/22448)) ([97d8b39](https://github.com/n8n-io/n8n/commit/97d8b393261eb8306d8cc33bb4883fc7be3ee1b2))
* **core:** Introduce batch workflow rule to fix subworkflow with wait node detection ([#22447](https://github.com/n8n-io/n8n/issues/22447)) ([e0bc441](https://github.com/n8n-io/n8n/commit/e0bc4416ea1709cf5468f580074d46cd43cff09d))
* **core:** Mark `''` and `[]` as empty when filtering numbers ([#22347](https://github.com/n8n-io/n8n/issues/22347)) ([a4d2cfa](https://github.com/n8n-io/n8n/commit/a4d2cfae4af2a2080b0e610ea3298e24238871ae))
* **core:** OIDC form breaks when enabling OIDC while SAML is active ([#22463](https://github.com/n8n-io/n8n/issues/22463)) ([613b088](https://github.com/n8n-io/n8n/commit/613b08843d6542de2e3e98ee2a0535535294ce1b))
* Detect workflow calling itself expression in migration report ([#22516](https://github.com/n8n-io/n8n/issues/22516)) ([1ddb634](https://github.com/n8n-io/n8n/commit/1ddb6344a5dbddd6385f1d68d94314fa5ab72cb1))
* **editor, core:** Fix display for binary data metadata origin ([#22270](https://github.com/n8n-io/n8n/issues/22270)) ([df1aa13](https://github.com/n8n-io/n8n/commit/df1aa130cb3a417b5795b13af50e8c57f5137aff))
* **editor:** Avoid clearing EULA license key when closing dialog ([#22424](https://github.com/n8n-io/n8n/issues/22424)) ([fe05ea4](https://github.com/n8n-io/n8n/commit/fe05ea4df8b415f600bb8d29bf29544683f70c3a))
* **editor:** Eval trigger node with data table works when underlying data changes ([#22389](https://github.com/n8n-io/n8n/issues/22389)) ([6f1b09e](https://github.com/n8n-io/n8n/commit/6f1b09eeda8554abc207e0640fee8cc500cea3c6))
* **editor:** Fix editor pan / zoom when inserting nodes ([#22401](https://github.com/n8n-io/n8n/issues/22401)) ([f435430](https://github.com/n8n-io/n8n/commit/f4354301ecb0cbb0d6386d4f32c2641845cfc8fe))
* **editor:** Fix issue for blinking/jumping UI when switching projects ([#22256](https://github.com/n8n-io/n8n/issues/22256)) ([6185550](https://github.com/n8n-io/n8n/commit/6185550971e133beb9092d3695eecfa6e66e6113))
* **editor:** Fix sub-nodes connection labels counters  ([#21549](https://github.com/n8n-io/n8n/issues/21549)) ([d366cb4](https://github.com/n8n-io/n8n/commit/d366cb4f37eacc422cafc7795180837a3f1087e8))
* **editor:** Missing duplicate workflow action on workflow list ([#22230](https://github.com/n8n-io/n8n/issues/22230)) ([000cccb](https://github.com/n8n-io/n8n/commit/000cccb62700144fd41ed70e2177de1c3cb32c31))
* **editor:** Preserve paired item data in pinned data ([#21417](https://github.com/n8n-io/n8n/issues/21417)) ([254a53e](https://github.com/n8n-io/n8n/commit/254a53e7bb8acdd3202841b0ec85a87907e4379b))
* **editor:** Remove unwanted outlines when waiting for webhook event in light mode in new NDV ([#22425](https://github.com/n8n-io/n8n/issues/22425)) ([4d68b6c](https://github.com/n8n-io/n8n/commit/4d68b6c6987d7193fd35aa1c41958252df56ab02))
* **editor:** Standardize CSS class naming conventions across new design system components ([#22551](https://github.com/n8n-io/n8n/issues/22551)) ([c82d95a](https://github.com/n8n-io/n8n/commit/c82d95aecbbdf3379929ca99fb474909f08bfbf4))
* **editor:** Wording for migration rule detail table headers ([#22398](https://github.com/n8n-io/n8n/issues/22398)) ([cd9f565](https://github.com/n8n-io/n8n/commit/cd9f56569dcf1e65df2d4f72b7007514276dac01))
* Enable streaming version of Respond To Webhook node ([#22350](https://github.com/n8n-io/n8n/issues/22350)) ([dc407c2](https://github.com/n8n-io/n8n/commit/dc407c25fd3e9cc60704ae53c9508ee738c24efb))
* **Git Node:** Throw an error if the repository path is blocked ([#22253](https://github.com/n8n-io/n8n/issues/22253)) ([a49b179](https://github.com/n8n-io/n8n/commit/a49b179e891c0b3501b6784c82af72b5a8c5a02d))
* **Gmail Node:** Use Reply-To header when replying to a message ([#22145](https://github.com/n8n-io/n8n/issues/22145)) ([2a3cba7](https://github.com/n8n-io/n8n/commit/2a3cba74ee8716cc94c96b8849bda02bc88dbbcb))
* **HTTP Node:** Handle Azure Storage Shared Key ([#22136](https://github.com/n8n-io/n8n/issues/22136)) ([b581dbc](https://github.com/n8n-io/n8n/commit/b581dbc23262c4f96f262e23d9274765cb54e09c))
* **HTTP Request Node:** Detect and handle non-UTF-8 response encodings ([#20889](https://github.com/n8n-io/n8n/issues/20889)) ([6068fb3](https://github.com/n8n-io/n8n/commit/6068fb3b2008ed6e4cbbd01057bca280c91f021b))
* Improve insights tests execution failure visibility ([#22538](https://github.com/n8n-io/n8n/issues/22538)) ([f937c0f](https://github.com/n8n-io/n8n/commit/f937c0fb5089dedab01361f67e39e7280d964d8a))
* **MCP Client Node:** Fix selecting PKCE auth flow for some servers and request scopes from `scopes_requested` during DCR ([#22405](https://github.com/n8n-io/n8n/issues/22405)) ([6765d15](https://github.com/n8n-io/n8n/commit/6765d15ead1e0226078d4a6adbbf7d36e7a827fb))
* Pin n8n packages to workspace version ([#22460](https://github.com/n8n-io/n8n/issues/22460)) ([75b2cd0](https://github.com/n8n-io/n8n/commit/75b2cd0de6b02b392be2b1e4f61a243da7bfe5b8))
* **PostgreSQL Node:** Input items with array being modified ([#22426](https://github.com/n8n-io/n8n/issues/22426)) ([42cda59](https://github.com/n8n-io/n8n/commit/42cda59ee5f175b2b9f887b8a5fbdd60fda8184b))
* Renovate will now bump versions ([#22245](https://github.com/n8n-io/n8n/issues/22245)) ([17ea0dd](https://github.com/n8n-io/n8n/commit/17ea0dd4662beecc61ec7fbf4bb45abeab69de54))
* Show correct date range in insight overview ([3130d20](https://github.com/n8n-io/n8n/commit/3130d205331124d08299c54db5a31a0a6781e5b3))
* **Slack Node:** Sort messages manually ([#21822](https://github.com/n8n-io/n8n/issues/21822)) ([52b93ed](https://github.com/n8n-io/n8n/commit/52b93ed5b237e031c4e079ad3e620c0943fb8cda))
* **Sort Node:** Periodic error when using Code sort type ([#22409](https://github.com/n8n-io/n8n/issues/22409)) ([2360d87](https://github.com/n8n-io/n8n/commit/2360d8719a529b61989da9b215a6c0a7da861087))
* Support resolving $fromAI in vector store tools ([#22457](https://github.com/n8n-io/n8n/issues/22457)) ([d72d68c](https://github.com/n8n-io/n8n/commit/d72d68c7191576501e8b1a387a0d8c1366c83c05))
* Update base image dependencies to latest security patches ([#22275](https://github.com/n8n-io/n8n/issues/22275)) ([5fd1702](https://github.com/n8n-io/n8n/commit/5fd1702429eb67bd13d5e0978faf93015c1d527f))
* When chat session is reset, update session id ([#22288](https://github.com/n8n-io/n8n/issues/22288)) ([7d82c3c](https://github.com/n8n-io/n8n/commit/7d82c3c02a4f61941e714de76c450d3e9c21ad98))


### Features

* Add entries to context menu to copy webhook's urls ([#21769](https://github.com/n8n-io/n8n/issues/21769)) ([6e344f0](https://github.com/n8n-io/n8n/commit/6e344f0f2968a8367358761ca7606787c375cbcc))
* Add the time saved node ([#22269](https://github.com/n8n-io/n8n/issues/22269)) ([b83c43f](https://github.com/n8n-io/n8n/commit/b83c43f8dd9d16932a3c45da908ee30053624f62))
* Add time saved mode workflow setting ([#22343](https://github.com/n8n-io/n8n/issues/22343)) ([b2f78d7](https://github.com/n8n-io/n8n/commit/b2f78d7c7aba592a70c08751f2ef0a004a0be60f))
* **ai-builder:** Using templates to improve generation ([#22521](https://github.com/n8n-io/n8n/issues/22521)) ([7186dcf](https://github.com/n8n-io/n8n/commit/7186dcfe7ee184319aefce4ae2c09ead6dece418))
* Allow configuring workflow for time saved capture by node ([#22386](https://github.com/n8n-io/n8n/issues/22386)) ([4adfced](https://github.com/n8n-io/n8n/commit/4adfced9373ca2b4da57ec9a28cbae63c6e615f8))
* **Azure AI Search Node:** Add clear index option to Azure AI Search vector store ([#22183](https://github.com/n8n-io/n8n/issues/22183)) ([5cb594d](https://github.com/n8n-io/n8n/commit/5cb594d7efcc52c834855d13850735939e7d7086))
* **core:** Add get version public endpoint ([#22407](https://github.com/n8n-io/n8n/issues/22407)) ([b6f8050](https://github.com/n8n-io/n8n/commit/b6f8050dfab80647fa2ed336c23566654918f936))
* **core:** Deactivate crashed workflows ([#21888](https://github.com/n8n-io/n8n/issues/21888)) ([710a654](https://github.com/n8n-io/n8n/commit/710a6548d444fe740158333ce362fec62c8d3075))
* **core:** Inject hooks into applicable trigger node properties for the node UI ([#22290](https://github.com/n8n-io/n8n/issues/22290)) ([92dca5f](https://github.com/n8n-io/n8n/commit/92dca5f739c535d8145fd54be8235e441e2c08ba))
* **core:** Introduce `database` mode for binary data storage ([#22162](https://github.com/n8n-io/n8n/issues/22162)) ([934b9a7](https://github.com/n8n-io/n8n/commit/934b9a7346c713c4f3ced9fb7b972eb231affc15))
* **core:** Use new workflow history in mcp tools ([#22384](https://github.com/n8n-io/n8n/issues/22384)) ([32c2909](https://github.com/n8n-io/n8n/commit/32c2909d729375408db13696357895a5ec28d28a))
* **Form Node:** Allow users to set a default value for form fields ([#22200](https://github.com/n8n-io/n8n/issues/22200)) ([b0fc88b](https://github.com/n8n-io/n8n/commit/b0fc88b437e376b8283ed6bddcca63bac74c1aae))
* **Gemini Node:** Add support for Nano Banana Pro model ([#22254](https://github.com/n8n-io/n8n/issues/22254)) ([7a4cc40](https://github.com/n8n-io/n8n/commit/7a4cc40dc85998790d57e336ab3384905912222c))
* **Guardrails Node:** Require Chat model only for LLM checks ([#22241](https://github.com/n8n-io/n8n/issues/22241)) ([c1dade7](https://github.com/n8n-io/n8n/commit/c1dade7ad397d0aed2245554d32906f774860a3f))
* Reduce unauthentication information in settings endpoint further ([#22106](https://github.com/n8n-io/n8n/issues/22106)) ([83809e6](https://github.com/n8n-io/n8n/commit/83809e62ad0f3d22447549b03173f38f93f523a1))



# [1.122.0](https://github.com/n8n-io/n8n/compare/n8n@1.121.0...n8n@1.122.0) (2025-11-24)


### Bug Fixes

* @n8n/scan-community-package not working on Windows ([#22077](https://github.com/n8n-io/n8n/issues/22077)) ([27eeec0](https://github.com/n8n-io/n8n/commit/27eeec01574e939de8c9eb1f349109f9127e7bf2))
* **Agent Node:** Thinking model issue - undefined `.map` error ([#22046](https://github.com/n8n-io/n8n/issues/22046)) ([231e4ef](https://github.com/n8n-io/n8n/commit/231e4eff57efe2a9ff11f4e5bcbd36c252e8006f))
* **ai-builder:** Fixing scroll issues when workflow builder when NDV is open ([#22005](https://github.com/n8n-io/n8n/issues/22005)) ([4d525e8](https://github.com/n8n-io/n8n/commit/4d525e83b1e2a379bf4fc0d3e09031a27c7250e2))
* **ai-builder:** Improving workflow builder following model instructions and using AI agent node ([#22011](https://github.com/n8n-io/n8n/issues/22011)) ([da2446e](https://github.com/n8n-io/n8n/commit/da2446ead3239cbbb95c5552637aee157831e8c6))
* **API:** Add correct payload example ([#22057](https://github.com/n8n-io/n8n/issues/22057)) ([a0c2071](https://github.com/n8n-io/n8n/commit/a0c2071cb0ba324bd2d42225f4e96b4a3a0b1361))
* **ChatTrigger Node:** Keep session ID when load previous session is on ([#22150](https://github.com/n8n-io/n8n/issues/22150)) ([ca84de8](https://github.com/n8n-io/n8n/commit/ca84de8d56e29cdbec89c82380636de549221d25))
* **core:** Add project id on /new and /from-url endpoints to add project scope auth ([#21865](https://github.com/n8n-io/n8n/issues/21865)) ([cb0fa96](https://github.com/n8n-io/n8n/commit/cb0fa963cac3c5d11d6fca46b2bc1223333ae73e))
* **core:** Allow chat to process text files as well as images ([#22093](https://github.com/n8n-io/n8n/issues/22093)) ([aa17707](https://github.com/n8n-io/n8n/commit/aa17707805617c411a912ae3ddb49fbdb1a67087))
* **core:** Fix mcp access scope issue ([#22031](https://github.com/n8n-io/n8n/issues/22031)) ([eb6cbfc](https://github.com/n8n-io/n8n/commit/eb6cbfc5e3f4e7adf9faf7afcead016333ebd908))
* **core:** Prevent worker instance from running insights collection ([#21610](https://github.com/n8n-io/n8n/issues/21610)) ([219b60b](https://github.com/n8n-io/n8n/commit/219b60b8d14f59496326902b2a3b60c1ce1ff3b0))
* **core:** Restore `moment` to regular runners image ([#22212](https://github.com/n8n-io/n8n/issues/22212)) ([b3ceeaf](https://github.com/n8n-io/n8n/commit/b3ceeafb967ceb6d96d0511ac53cb9660ca595d0))
* **core:** Use execFile instead of exec to prevent command injection ([#21952](https://github.com/n8n-io/n8n/issues/21952)) ([296684e](https://github.com/n8n-io/n8n/commit/296684e67c10e40d1f70dcdb1ebc07d2d9b7e18a))
* **editor:** Close card dropdowns when workflows list is scrolled ([#21630](https://github.com/n8n-io/n8n/issues/21630)) ([c6434ac](https://github.com/n8n-io/n8n/commit/c6434aca0396e10e6f49bf999c4e93168491901d))
* **editor:** Fixing tag style on canvas ([#21957](https://github.com/n8n-io/n8n/issues/21957)) ([2b03b5b](https://github.com/n8n-io/n8n/commit/2b03b5bcf29a8f84cc48574ff9760ed3209c7d3f))
* **editor:** Inconsistent syntax highlight color ([#22029](https://github.com/n8n-io/n8n/issues/22029)) ([5d1c375](https://github.com/n8n-io/n8n/commit/5d1c375fc662b46960244a67149e89f5355052dd))
* **editor:** Minor design fixes for the migration report ([#22110](https://github.com/n8n-io/n8n/issues/22110)) ([68a81c2](https://github.com/n8n-io/n8n/commit/68a81c2ed6c64550c890d8efc99dc055092ec672))
* **editor:** Notice background colors ([#22044](https://github.com/n8n-io/n8n/issues/22044)) ([ad1e422](https://github.com/n8n-io/n8n/commit/ad1e422babe1f1d1776167546e6c8eff44b4f958))
* **editor:** Reduce length of the component and update position ([#21838](https://github.com/n8n-io/n8n/issues/21838)) ([29527d0](https://github.com/n8n-io/n8n/commit/29527d0579b01fdfee3fa5d49e89b2615208aafb))
* **editor:** Replace icon for null in schema view ([#21415](https://github.com/n8n-io/n8n/issues/21415)) ([e569750](https://github.com/n8n-io/n8n/commit/e569750e328d62fd7a3fbd41f9fcb7c7320da23b))
* **editor:** Trim whitespace from workflow owner name ([#21483](https://github.com/n8n-io/n8n/issues/21483)) ([0dca2b0](https://github.com/n8n-io/n8n/commit/0dca2b0f129e714bb4fb0da43dac8a2438f46d45))
* **editor:** Typo fix for oauth ([#21980](https://github.com/n8n-io/n8n/issues/21980)) ([2681c70](https://github.com/n8n-io/n8n/commit/2681c7033eb4657f30ae9fcc8bf745c42a0a00d4))
* Fixing failing CI tests for `nodes-langchain` package ([#22099](https://github.com/n8n-io/n8n/issues/22099)) ([77b7c2d](https://github.com/n8n-io/n8n/commit/77b7c2dd1a432a684b6f7af432daeb41a7aed5a6))
* **Google BigQuery Node:** Prevent infinite loop on job fail ([#21741](https://github.com/n8n-io/n8n/issues/21741)) ([008cd8d](https://github.com/n8n-io/n8n/commit/008cd8d08369ad188625fb5efaa6fa3707c1548e))
* Improve json repair logic ([#22088](https://github.com/n8n-io/n8n/issues/22088)) ([60a9cbf](https://github.com/n8n-io/n8n/commit/60a9cbf13368be084c7ceb19ae2c28dd538bcc5a))
* Improve logging for settings store ([#22216](https://github.com/n8n-io/n8n/issues/22216)) ([e3a2614](https://github.com/n8n-io/n8n/commit/e3a2614792f90078a5957f92016b115133fd4e99))
* In queue mode "Respond to Webhook" node returns 500 when there is an error in the execution  ([#21981](https://github.com/n8n-io/n8n/issues/21981)) ([fe297d0](https://github.com/n8n-io/n8n/commit/fe297d09aba112779087b6f344747c78fe42e626))
* **n8n Form Node:** Allow undefined formatDate ([#21811](https://github.com/n8n-io/n8n/issues/21811)) ([a9f117c](https://github.com/n8n-io/n8n/commit/a9f117cefe9d49753191f35a1c59dcb38924a25e))
* **OpenAi Node:** Fix grammar in audio operation descriptions ([#22041](https://github.com/n8n-io/n8n/issues/22041)) ([75402fb](https://github.com/n8n-io/n8n/commit/75402fb68115088cf9ce5623ad36445ab7eabb04))
* **OpenAI Node:** Use new model for text classification ([#22130](https://github.com/n8n-io/n8n/issues/22130)) ([7c4771e](https://github.com/n8n-io/n8n/commit/7c4771e62379cbe49f0fdf909f0d268a2d332b37))
* **Salesforce Trigger Node:** Fix Opportunity updated description ([#22169](https://github.com/n8n-io/n8n/issues/22169)) ([07fcd07](https://github.com/n8n-io/n8n/commit/07fcd0708c40f0b6562efedc168649d716277ed8))


### Features

* Add best practices for all builder categories ([#21943](https://github.com/n8n-io/n8n/issues/21943)) ([214a7e9](https://github.com/n8n-io/n8n/commit/214a7e9af3c0c74772526ff24c2fdce9da50058c))
* Add support for global credentials  ([#21700](https://github.com/n8n-io/n8n/issues/21700)) ([55c3150](https://github.com/n8n-io/n8n/commit/55c3150c1126c277a3bfff5ff2fce07b4a667969))
* **ai-builder:** Add python script for workflow comparison ([#21927](https://github.com/n8n-io/n8n/issues/21927)) ([246387e](https://github.com/n8n-io/n8n/commit/246387e3c985fe8de9078749be587b91bd9c898d))
* **ai-builder:** Send workflow validation issues to telemetry ([#21837](https://github.com/n8n-io/n8n/issues/21837)) ([0a355cc](https://github.com/n8n-io/n8n/commit/0a355ccadbd49f824611a8b5dbda43afffdeb83d))
* Block UI updates for instance / project roles if provisioning enabed ([#22095](https://github.com/n8n-io/n8n/issues/22095)) ([72cdca2](https://github.com/n8n-io/n8n/commit/72cdca23d6b58352618a7386799ce43a260f320c))
* **core:** Allow creating data tables from csv files ([#21051](https://github.com/n8n-io/n8n/issues/21051)) ([2830665](https://github.com/n8n-io/n8n/commit/2830665f7a325b3e4d8cf12b9f51eca76961268b))
* **core:** Configurable workflow statistics metrics ([#18241](https://github.com/n8n-io/n8n/issues/18241)) ([a896417](https://github.com/n8n-io/n8n/commit/a896417300f8d30dc1e1c995049b14a73150b6d6))
* **core:** Make user role provisioning available on enterprise ([#22166](https://github.com/n8n-io/n8n/issues/22166)) ([6786915](https://github.com/n8n-io/n8n/commit/6786915537e43e4bbc1b525e40d41bb7020f3d45))
* **core:** Move settings for SSO user role provisioning from dedicated page to existing form ([#21901](https://github.com/n8n-io/n8n/issues/21901)) ([34039b3](https://github.com/n8n-io/n8n/commit/34039b370b4d29831f3e8d25a6b89ac3dcc963ff))
* **core:** Shorten copy text on confirm provisioning dialog ([#22086](https://github.com/n8n-io/n8n/issues/22086)) ([4ddd708](https://github.com/n8n-io/n8n/commit/4ddd7089b3632db6fe326f956dc27fc74918f59d))
* **core:** Update binary data breaking change ([#22100](https://github.com/n8n-io/n8n/issues/22100)) ([4c2c1ce](https://github.com/n8n-io/n8n/commit/4c2c1ce9d1d59947a33da3334a7ce051ecbbdfeb))
* **editor:** Add dismissable callout for scaling mode enabled customers ([#21897](https://github.com/n8n-io/n8n/issues/21897)) ([fe5697d](https://github.com/n8n-io/n8n/commit/fe5697dee110a1867bfef8036f6ccee04d024455))
* **editor:** CSV download support for data tables ([#22048](https://github.com/n8n-io/n8n/issues/22048)) ([81a3d39](https://github.com/n8n-io/n8n/commit/81a3d395f28c3f70547fd379ed1ecf8ab083fffc))
* **editor:** Custom project roles Beta release ([#22228](https://github.com/n8n-io/n8n/issues/22228)) ([1a7089d](https://github.com/n8n-io/n8n/commit/1a7089df7a562eac3c4f1b530015cad6caf6aea2))
* **editor:** Improve Data tables visibility ([#22074](https://github.com/n8n-io/n8n/issues/22074)) ([993040a](https://github.com/n8n-io/n8n/commit/993040a2c576d72f5661ffd1e7108889c99c37f0))
* **editor:** Update command bar wf search to match by any query term ([#21798](https://github.com/n8n-io/n8n/issues/21798)) ([5591207](https://github.com/n8n-io/n8n/commit/55912079d16d3478083f52fe7c3a8deb4f47066c))
* **MCP Client Node:** New node ([#21942](https://github.com/n8n-io/n8n/issues/21942)) ([69e092a](https://github.com/n8n-io/n8n/commit/69e092a263fc5890d783247eb2759d1419f9c7f1))
* **Stripe Node:** Add meter events for billing ([#21962](https://github.com/n8n-io/n8n/issues/21962)) ([5319bc8](https://github.com/n8n-io/n8n/commit/5319bc8659a1b4c3fa35abb0c7248e7548e97dea))



# [1.121.0](https://github.com/n8n-io/n8n/compare/n8n@1.120.0...n8n@1.121.0) (2025-11-18)


### Bug Fixes

* **Code Node:** Revert node icon back to old icon ([#21777](https://github.com/n8n-io/n8n/issues/21777)) ([7bb3fdc](https://github.com/n8n-io/n8n/commit/7bb3fdc270291e5fe08f673c2e278bf95f199003))
* **core:** Add timeout and recovery for database connection health checks ([#21506](https://github.com/n8n-io/n8n/issues/21506)) ([09c8b2d](https://github.com/n8n-io/n8n/commit/09c8b2dea89295dad66bec7c33f422c8e0a086ed))
* **core:** Capture stoppedAt timestamp and improve fullRunData handling ([#21290](https://github.com/n8n-io/n8n/issues/21290)) ([343413d](https://github.com/n8n-io/n8n/commit/343413dbd9b35a1602a17ef8c4c432c0fe534b71))
* **core:** Correctly filter custom nodes when NODES_INCLUDE/EXCLUDE is set ([#21705](https://github.com/n8n-io/n8n/issues/21705)) ([08fea7b](https://github.com/n8n-io/n8n/commit/08fea7b17fbc7532b56279ad917c495bff7a327a))
* **core:** Declarative Node - Continue using Error Output returns empty item ([#21823](https://github.com/n8n-io/n8n/issues/21823)) ([e3a996d](https://github.com/n8n-io/n8n/commit/e3a996d7d2f1ab8a686b5d1fa5a960c16f1beeeb))
* **core:** Enforce timeout for task requests ([#21493](https://github.com/n8n-io/n8n/issues/21493)) ([e9d8757](https://github.com/n8n-io/n8n/commit/e9d875701046f088724f8f0edfc89ae78976c038))
* **core:** Ensure database fallback when Redis cache fails on webhook lookup ([#21872](https://github.com/n8n-io/n8n/issues/21872)) ([7716212](https://github.com/n8n-io/n8n/commit/77162128ff77b47aa6073a110ecf06b5bab559d0))
* **core:** Fix type issues for execution context ([#21852](https://github.com/n8n-io/n8n/issues/21852)) ([1098db4](https://github.com/n8n-io/n8n/commit/1098db4f18f7d5b6ba7dc5d436612acfdade4bef))
* **core:** Validate package version when installing community node ([#21886](https://github.com/n8n-io/n8n/issues/21886)) ([6eeb739](https://github.com/n8n-io/n8n/commit/6eeb739c9283e4691f5754494dcd223319a74f2c))
* **editor:** Avoid node overlap when adding Loop node between existing nodes ([#21419](https://github.com/n8n-io/n8n/issues/21419)) ([94e5b1e](https://github.com/n8n-io/n8n/commit/94e5b1eef083335e76919307373b0672d5c58ed5))
* **editor:** Filtering for archived workflows in error workflows list ([#21874](https://github.com/n8n-io/n8n/issues/21874)) ([cc3f31a](https://github.com/n8n-io/n8n/commit/cc3f31a808fbee7c33a91afefc3a62f064c91aa9))
* **editor:** Fix command bar keyboard events handing ([#21759](https://github.com/n8n-io/n8n/issues/21759)) ([86f6da3](https://github.com/n8n-io/n8n/commit/86f6da38333848dc2c54aedaffda9591a12f66c1))
* **editor:** Fix node name tooltip in NDV header ([#21760](https://github.com/n8n-io/n8n/issues/21760)) ([6fd8ca9](https://github.com/n8n-io/n8n/commit/6fd8ca9021c33883c3d594e962f006059da5a834))
* **editor:** Make sure `Pin` action works only for pinnabe nodes ([#21723](https://github.com/n8n-io/n8n/issues/21723)) ([cf9eb4e](https://github.com/n8n-io/n8n/commit/cf9eb4e4ef77e81da844e68ba88dbfda9150e398))
* **editor:** Previous nodes' outputs aren't available in expression editor for sub-nodes ([#21730](https://github.com/n8n-io/n8n/issues/21730)) ([bd62be0](https://github.com/n8n-io/n8n/commit/bd62be0409a663a4b086a0c177f35bcb850a6c10))
* **editor:** Provide better output for subnode execution errors ([#21714](https://github.com/n8n-io/n8n/issues/21714)) ([5b2d15e](https://github.com/n8n-io/n8n/commit/5b2d15e78ddf3f62f221da4fc00ceade5cda7ae3))
* **editor:** Refresh insights weekly summary when entering any of the /home routes ([#21859](https://github.com/n8n-io/n8n/issues/21859)) ([c3e6439](https://github.com/n8n-io/n8n/commit/c3e6439303a989e85edfd7745970db7bf20d87dc))
* **editor:** Small UI tweaks for data size warnings ([#21693](https://github.com/n8n-io/n8n/issues/21693)) ([f9404ec](https://github.com/n8n-io/n8n/commit/f9404ecb61f3c623e56fc3eee6cf9010856f50e2))
* **editor:** Take user back to correct project after archive/delete ([#21940](https://github.com/n8n-io/n8n/issues/21940)) ([9ddedb0](https://github.com/n8n-io/n8n/commit/9ddedb03dfa2c096c4fb84400a1871dadc0f9987))
* **editor:** Workflow tags style issue ([#21697](https://github.com/n8n-io/n8n/issues/21697)) ([af7417b](https://github.com/n8n-io/n8n/commit/af7417b88ea1ad239f3f939221af5709455fc252))
* **Embeddings Azure OpenAi Node:** Add proxy agent ([#18663](https://github.com/n8n-io/n8n/issues/18663)) ([0ab07f0](https://github.com/n8n-io/n8n/commit/0ab07f04788e9d4f82516939da7e83d3b3dbef44))
* Enable respond to chat node as tool ([#21253](https://github.com/n8n-io/n8n/issues/21253)) ([49eebcf](https://github.com/n8n-io/n8n/commit/49eebcf9292675f14a481747e0a0af5d9eed1947))
* Fix expr-eval dependency for CVE-2025-12735 ([#21862](https://github.com/n8n-io/n8n/issues/21862)) ([2661162](https://github.com/n8n-io/n8n/commit/2661162238b04b585105be0529df123369b1c0e6))
* **Form Node:** Update mime-types package to handle x-zip-compressed ([#21492](https://github.com/n8n-io/n8n/issues/21492)) ([8a935aa](https://github.com/n8n-io/n8n/commit/8a935aa5c1fcc0eaff1c1edb6b4d2e0b7828c7e1))
* **Form Trigger Node:** Do not translate checkbox values ([#21737](https://github.com/n8n-io/n8n/issues/21737)) ([64137eb](https://github.com/n8n-io/n8n/commit/64137eb4d65efdc94916953e8dee65ff3dbdf132))
* **Git Node:** Disable git hooks by default ([#21797](https://github.com/n8n-io/n8n/issues/21797)) ([4dd853b](https://github.com/n8n-io/n8n/commit/4dd853b2d5fe5e35940c14813da0fa72b6c87136))
* Google Vertex sub-node error handling ([#21504](https://github.com/n8n-io/n8n/issues/21504)) ([cc55fef](https://github.com/n8n-io/n8n/commit/cc55fef2404e03c45665021a59feb9a5345d2d33))
* Improve dev mode output and command reliability in `n8n-node` CLI ([#21231](https://github.com/n8n-io/n8n/issues/21231)) ([970f1b7](https://github.com/n8n-io/n8n/commit/970f1b70702bfda1fa2034082f9a2129917ad066))
* Improve domain validation ([#21534](https://github.com/n8n-io/n8n/issues/21534)) ([404640f](https://github.com/n8n-io/n8n/commit/404640f1e93fe848ec4b90e972a1ea53e33f80e2))
* **MCP Client Tool Node:** DCR not working on cloud ([#21808](https://github.com/n8n-io/n8n/issues/21808)) ([5f419f4](https://github.com/n8n-io/n8n/commit/5f419f414a04a83c9c537e5c0f3dfa42a771afc3))
* **MCP Client Tool Node:** Respect the timeout option ([#21478](https://github.com/n8n-io/n8n/issues/21478)) ([9299a7e](https://github.com/n8n-io/n8n/commit/9299a7ee003865594f9f0d917c2efad4b6b91194))
* **MCP Client Tool Node:** Scope is not working if use credential without DRC on (Scope set but pass to /auth endpoint is null) ([#21520](https://github.com/n8n-io/n8n/issues/21520)) ([d3d2017](https://github.com/n8n-io/n8n/commit/d3d2017dc900fd67aae7ca8b7f25781428ff0e01))
* **MCP Client Tool Node:** Use proxy for MCP calls ([#21720](https://github.com/n8n-io/n8n/issues/21720)) ([d9e2dc2](https://github.com/n8n-io/n8n/commit/d9e2dc2166a749190394e38fad80d423d5b3e682))
* **Merge Node:** Show node icon in V1 ([#21812](https://github.com/n8n-io/n8n/issues/21812)) ([65622e0](https://github.com/n8n-io/n8n/commit/65622e041572fb9b6cd632c81846111f1274739d))
* **Schedule Trigger Node:** Show interval boundaries ([#21732](https://github.com/n8n-io/n8n/issues/21732)) ([6963164](https://github.com/n8n-io/n8n/commit/69631646e124f0b3409dc7b3e26c6196dc56c7b0))
* **Slack Node:** Enable pagination for RLC - listChannels ([#21434](https://github.com/n8n-io/n8n/issues/21434)) ([bd04340](https://github.com/n8n-io/n8n/commit/bd04340f4f969df1b4ff5023affac08ae25a5661))


### Features

* **ai-builder:** Updating prompt suggestions for the workflow builder ([#21690](https://github.com/n8n-io/n8n/issues/21690)) ([72dfa55](https://github.com/n8n-io/n8n/commit/72dfa553a1aa378953a6823f2dd237c144f9baf5))
* **Airtop Node:** Add support for airtop agents ([#21624](https://github.com/n8n-io/n8n/issues/21624)) ([6d30615](https://github.com/n8n-io/n8n/commit/6d30615a4c1eaf7af4c8ae2796e061b1dafa4e9b))
* **Azure AI Search API Node:** Add Azure AI Search Vector Store Node (v2) ([#21892](https://github.com/n8n-io/n8n/issues/21892)) ([9c11c3f](https://github.com/n8n-io/n8n/commit/9c11c3f71ef9dbfb49a26386a359960ce22a376a))
* Block invite acceptance on SSO systems ([#21830](https://github.com/n8n-io/n8n/issues/21830)) ([f73eba7](https://github.com/n8n-io/n8n/commit/f73eba7c86fdaa2cbef5cde6282b7e310ce4d02f))
* **core:** Add ACR parameter to OIDC settings ([#20974](https://github.com/n8n-io/n8n/issues/20974)) ([bc61f94](https://github.com/n8n-io/n8n/commit/bc61f94274bef8f4f64c5d014bedef690d218a84))
* **core:** Enable workflow history to all users ([#21240](https://github.com/n8n-io/n8n/issues/21240)) ([e3267b2](https://github.com/n8n-io/n8n/commit/e3267b257ab8ff9ee4c5fc85638eb1d771514a71))
* **core:** Implement all breaking changes rules to v2 ([#21217](https://github.com/n8n-io/n8n/issues/21217)) ([363a777](https://github.com/n8n-io/n8n/commit/363a7773b8f2d2b09466bb60fa7cd19bd6776757))
* **core:** Improve workflows text search ([#21738](https://github.com/n8n-io/n8n/issues/21738)) ([35488e7](https://github.com/n8n-io/n8n/commit/35488e7acc99b0aa8e25b3b499a3cb7d22c9ae5d))
* **core:** Return WWW-Authenticate header in `/mcp-server/http` endpoint ([#21686](https://github.com/n8n-io/n8n/issues/21686)) ([8ed3486](https://github.com/n8n-io/n8n/commit/8ed34862bb6304d0434c0c90155f8fcc1f3c8abd))
* Disable user invites on SSO systems ([#21806](https://github.com/n8n-io/n8n/issues/21806)) ([3cdfff7](https://github.com/n8n-io/n8n/commit/3cdfff7e6cbbc82111dda0303b7a7a1d8b111c28))
* **editor:** Add missing doc url from backend response. remove feature flag ([#21936](https://github.com/n8n-io/n8n/issues/21936)) ([8e5e596](https://github.com/n8n-io/n8n/commit/8e5e5965b1129eb37cc5144d1617377a26d04fc7))
* **editor:** Auto-select operator type when drag and dropping values ([#21260](https://github.com/n8n-io/n8n/issues/21260)) ([707da6c](https://github.com/n8n-io/n8n/commit/707da6cab5486a25c8249f9fc226b5186a3fe49d))
* **editor:** Create breaking change audit page ([#21633](https://github.com/n8n-io/n8n/issues/21633)) ([2e27198](https://github.com/n8n-io/n8n/commit/2e27198c96edadb43900c2f719370e6a48c05e17))
* **editor:** Global row search on data table details view ([#21447](https://github.com/n8n-io/n8n/issues/21447)) ([95ab79f](https://github.com/n8n-io/n8n/commit/95ab79f3f8b1c72d8399c93e19bd6df35d859251))
* **editor:** New simplified empty layout ([#21214](https://github.com/n8n-io/n8n/issues/21214)) ([705a781](https://github.com/n8n-io/n8n/commit/705a78156afd714e976c95cf4ef7c507a8e04145))
* Expression editor - ability to preview HTML or Markdown in results pane ([#21408](https://github.com/n8n-io/n8n/issues/21408)) ([c8a29a7](https://github.com/n8n-io/n8n/commit/c8a29a77f26962ed932597da175cd10ea8c5e80a))
* **MCP Client Tool Node:** Add multiple headers authentication option ([#21435](https://github.com/n8n-io/n8n/issues/21435)) ([2a623ea](https://github.com/n8n-io/n8n/commit/2a623eacf32136deeaf4e6e04c571f889ed9dbf8))
* Prevent ldap email based account when there are deplicate emails ([#21745](https://github.com/n8n-io/n8n/issues/21745)) ([b3af602](https://github.com/n8n-io/n8n/commit/b3af602ed08e11591e17597183cca9c2ab1ff37c))
* Support custom encryption keys for imports / exports ([#21863](https://github.com/n8n-io/n8n/issues/21863)) ([040dcdb](https://github.com/n8n-io/n8n/commit/040dcdbfc97459c28407b32a44c0c81425f81ba0))
* Update upgrade wording for variables ([#21939](https://github.com/n8n-io/n8n/issues/21939)) ([e0e15bf](https://github.com/n8n-io/n8n/commit/e0e15bf444045d40739ace9ba8cc6d179eb02b17))



# [1.120.0](https://github.com/n8n-io/n8n/compare/n8n@1.119.0...n8n@1.120.0) (2025-11-10)


### Bug Fixes

* **ai-builder:** Add support for node versions in searching, adding and updating nodes ([#21488](https://github.com/n8n-io/n8n/issues/21488)) ([8270f37](https://github.com/n8n-io/n8n/commit/8270f37df5fa1d14b1eb2f16606a9128aeab74e3))
* **ai-builder:** Reduce "workflow state too big" errors ([#21542](https://github.com/n8n-io/n8n/issues/21542)) ([e5d7fb9](https://github.com/n8n-io/n8n/commit/e5d7fb971d6f8f68480dc8c0ac55c6852e248dbe))
* **API:** Fix returning role as slug on the users api handler ([#21490](https://github.com/n8n-io/n8n/issues/21490)) ([941a54e](https://github.com/n8n-io/n8n/commit/941a54e723768c317d82d034737af6c33e4107b6))
* Change unicode range to support more characters in expression parser ([#21394](https://github.com/n8n-io/n8n/issues/21394)) ([0a799e1](https://github.com/n8n-io/n8n/commit/0a799e1cabe17518dc6aa5a36fc303e79505492c))
* **Code Node:** Update error message when using `.item` in `Run once for all items` mode  ([#21416](https://github.com/n8n-io/n8n/issues/21416)) ([306972d](https://github.com/n8n-io/n8n/commit/306972d914c3f698ec1f43e2a0dc0839f06395d0))
* **core:** Column size for token column ([#21609](https://github.com/n8n-io/n8n/issues/21609)) ([8504beb](https://github.com/n8n-io/n8n/commit/8504beb154ef6ec2e6892cca851b0efdae366ddb))
* **core:** Include role in user-invite-email-click ([#21546](https://github.com/n8n-io/n8n/issues/21546)) ([27fd768](https://github.com/n8n-io/n8n/commit/27fd768deb9a1fc4e38cc8a524d224049c210da8))
* **core:** Insights fix same day queries ([#21574](https://github.com/n8n-io/n8n/issues/21574)) ([c100736](https://github.com/n8n-io/n8n/commit/c1007367458f1b0554c4f2b00f6fd907ef23d000))
* **core:** Insights use time aware range when end date is today, and start of day for past ranges ([#21540](https://github.com/n8n-io/n8n/issues/21540)) ([4dc58aa](https://github.com/n8n-io/n8n/commit/4dc58aacf851ab41039a12f8c96eacbe57b6b2cb))
* **editor:** Ensure license activation modal works when used without EULA ([#21681](https://github.com/n8n-io/n8n/issues/21681)) ([4e70050](https://github.com/n8n-io/n8n/commit/4e70050ab250417c12dc018d2ae972018ff4cb85))
* **editor:** Fix button image link in easy AI template sticky note for UK users ([#21527](https://github.com/n8n-io/n8n/issues/21527)) ([74a0b51](https://github.com/n8n-io/n8n/commit/74a0b51c4636b1760a10c5cb83bebbfdbcb8fca7))
* **editor:** Fix hanging logs panel tooltip ([#21631](https://github.com/n8n-io/n8n/issues/21631)) ([53efa28](https://github.com/n8n-io/n8n/commit/53efa2842ebc3b6e015a718e383f6ad4b1cbb107))
* **editor:** Fix main button create variable disable state based on scopes ([#21521](https://github.com/n8n-io/n8n/issues/21521)) ([d2e623e](https://github.com/n8n-io/n8n/commit/d2e623e2050e20e6cc44cb0233958ff0186e1e1e))
* **editor:** Fix preview for json output with long values ([#21412](https://github.com/n8n-io/n8n/issues/21412)) ([f354200](https://github.com/n8n-io/n8n/commit/f354200c84e6c9e43ec34bda56781b58ac61cf44))
* **editor:** Limit telemetry event size to 32kb ([#21312](https://github.com/n8n-io/n8n/issues/21312)) ([b68d3bf](https://github.com/n8n-io/n8n/commit/b68d3bf534fb2e1e4a9c7d5e469852a586185bd2))
* **editor:** Log view doesn't scroll in manual execution ([#21529](https://github.com/n8n-io/n8n/issues/21529)) ([6945e21](https://github.com/n8n-io/n8n/commit/6945e214233fdd3635d1bcb03968350a5d0905df))
* **Embeddings AWS Bedrock Node, AWS Bedrock Chat Model Node:** Fix HTTP proxy ([#21509](https://github.com/n8n-io/n8n/issues/21509)) ([53d91ee](https://github.com/n8n-io/n8n/commit/53d91ee89fbb6d28c63f841ca1b1acd21d6ab66f))
* Ensure workflows and folders updatedAt/createdAt aren't mixed up in project sorting ([#21484](https://github.com/n8n-io/n8n/issues/21484)) ([d9d36bf](https://github.com/n8n-io/n8n/commit/d9d36bf28f361d2c333b375744b4d7b51619e5a9))
* **Google Workspace Admin Node:** Include `changePasswordAtNextLogin`, `password` in update ([#21522](https://github.com/n8n-io/n8n/issues/21522)) ([477ffea](https://github.com/n8n-io/n8n/commit/477ffea4ced772de7aa06033536c074a4720089a))
* Prevent multiple api requests when changing workflow owner ([#21335](https://github.com/n8n-io/n8n/issues/21335)) ([b610e55](https://github.com/n8n-io/n8n/commit/b610e550f76723a33872c8408e9d506112a1c589))
* **SendGrid Node:** Use `/scopes` for credential testing ([#21499](https://github.com/n8n-io/n8n/issues/21499)) ([c5db57f](https://github.com/n8n-io/n8n/commit/c5db57fd8b7fd32009aacb24e12357a6120eeca1))
* **Slack Node:** Prevent invalid array arg on team join ([#20382](https://github.com/n8n-io/n8n/issues/20382)) ([afd40c6](https://github.com/n8n-io/n8n/commit/afd40c67093e551fc5c16dd39c57bf54446e32e3))


### Features

* Add support for mysql / mariadb ([#21525](https://github.com/n8n-io/n8n/issues/21525)) ([9bcad5a](https://github.com/n8n-io/n8n/commit/9bcad5ae2d63cdff0218636a845a1c7556dbb957))
* Add unit tests for getAttributesFromLoginResponse and handleSamlLogin ([#21678](https://github.com/n8n-io/n8n/issues/21678)) ([9e240d6](https://github.com/n8n-io/n8n/commit/9e240d6d748381a441c9f02ea5311da3f229f74b))
* Allow CORS in the discovery endpoints ([#21602](https://github.com/n8n-io/n8n/issues/21602)) ([3070e44](https://github.com/n8n-io/n8n/commit/3070e446bfec16c743cc2ac58c6ca9a9bd9106ee))
* **core:** Adapt breaking changes report data to UI needs ([#21442](https://github.com/n8n-io/n8n/issues/21442)) ([a2a484e](https://github.com/n8n-io/n8n/commit/a2a484ecf23b7c64f9cb98737de0ae202d0b70dc))
* **core:** Add OAuth to MCP server ([#21469](https://github.com/n8n-io/n8n/issues/21469)) ([cd167ac](https://github.com/n8n-io/n8n/commit/cd167ac6db5d30b21b9dbcee2ca870cfcfa0bcbe))
* **core:** Add workflow descriptions ([#21526](https://github.com/n8n-io/n8n/issues/21526)) ([ecc6706](https://github.com/n8n-io/n8n/commit/ecc67062a435a1924efbc0f6be7a03d4076fae19))
* **core:** Just in time role provisioning for SAML login ([#21387](https://github.com/n8n-io/n8n/issues/21387)) ([2eb1de6](https://github.com/n8n-io/n8n/commit/2eb1de6c82cd3d642ff3bbb50489c9c1b552ca4a))
* **editor:** Data size warning in AI Logs input/output sections ([#21555](https://github.com/n8n-io/n8n/issues/21555)) ([09f91a8](https://github.com/n8n-io/n8n/commit/09f91a8f45b702d168b466e183c0f09ce9e7fda4))
* **Extract from File Node:** Add `Skip Records With Errors` option ([#21347](https://github.com/n8n-io/n8n/issues/21347)) ([0ccf470](https://github.com/n8n-io/n8n/commit/0ccf47044a2ba5b94140bfdd2ba36b868091288d))
* Provide data export of access settings when enabling JIT ([#21532](https://github.com/n8n-io/n8n/issues/21532)) ([146e4ad](https://github.com/n8n-io/n8n/commit/146e4ad268c7d0e17af66bd9a00599e034e9ee54))
* **Redis Node:** Add list length (LLEN) operation ([#21420](https://github.com/n8n-io/n8n/issues/21420)) ([b0df438](https://github.com/n8n-io/n8n/commit/b0df43828604c23b6d95ed10465e2951b251355e))
* Use experiment feature flag for SSO provisioning (no changelog) ([#21494](https://github.com/n8n-io/n8n/issues/21494)) ([a2d6c8d](https://github.com/n8n-io/n8n/commit/a2d6c8d65f82b475d891a71382641404bbe36b05))



# [1.119.0](https://github.com/n8n-io/n8n/compare/n8n@1.118.0...n8n@1.119.0) (2025-11-03)


### Bug Fixes

* **AI Agent Node:** AI Agent v3 only sees first tool response item ([#21429](https://github.com/n8n-io/n8n/issues/21429)) ([d35ba6b](https://github.com/n8n-io/n8n/commit/d35ba6b3707085e8618f12724382a69dccdabedf))
* **ai-builder:** Do not show validation issues as tool errors ([#21310](https://github.com/n8n-io/n8n/issues/21310)) ([3290bf0](https://github.com/n8n-io/n8n/commit/3290bf0d92ef5d935ad8d84fa7466e204c0260b6))
* **ai-builder:** Fixing canvas buttons - if workflow builder is enabled always show "build with AI" button ([#21354](https://github.com/n8n-io/n8n/issues/21354)) ([3b53649](https://github.com/n8n-io/n8n/commit/3b536491658719a2b4d2d6c10586acee4d834f98))
* **ai-builder:** Hide the excute and refine dialog in the workflow builder if task was aborted ([#21355](https://github.com/n8n-io/n8n/issues/21355)) ([f79d968](https://github.com/n8n-io/n8n/commit/f79d968151466d383df2fdf7a17caf34ed7e554f))
* **Airtop Node:** Fix file upload and add support for session recording ([#21248](https://github.com/n8n-io/n8n/issues/21248)) ([4e9ee11](https://github.com/n8n-io/n8n/commit/4e9ee11c237d987eda647b01067c3646c7f29790))
* **core:** Add execution hints support for tools ([#21238](https://github.com/n8n-io/n8n/issues/21238)) ([8971a5a](https://github.com/n8n-io/n8n/commit/8971a5af8f9dd52c4c040978e5c56125ffbc934d))
* **core:** Allow dynamic node parameters in Public API schema ([#21345](https://github.com/n8n-io/n8n/issues/21345)) ([eb46201](https://github.com/n8n-io/n8n/commit/eb4620199e7942ad49a0407d8bfa4f209ce167ff))
* **core:** Disable ANSI colors in production debug logs ([#21344](https://github.com/n8n-io/n8n/issues/21344)) ([fa1ae8a](https://github.com/n8n-io/n8n/commit/fa1ae8afd61a0d0a640016034767d07597409459))
* **core:** Ensure reconnect on broker down in native Python runner ([#21475](https://github.com/n8n-io/n8n/issues/21475)) ([fbd60d2](https://github.com/n8n-io/n8n/commit/fbd60d2a076d5baf02223360c8415db63890db45))
* **core:** Fix AI Agent v3 Tool Execution Issues ([#21477](https://github.com/n8n-io/n8n/issues/21477)) ([11531c8](https://github.com/n8n-io/n8n/commit/11531c89365fbd03f87c608012d6aece5f86fc77))
* **core:** Grant admins full data table access ([#21316](https://github.com/n8n-io/n8n/issues/21316)) ([18012d9](https://github.com/n8n-io/n8n/commit/18012d98c8fd6290041a2faae5ea51f82a6ea8e1))
* **core:** Harden security restrictions in native Python runner ([#21263](https://github.com/n8n-io/n8n/issues/21263)) ([7cea1e2](https://github.com/n8n-io/n8n/commit/7cea1e26fe3cf82da0a69d34f2efbc2427156797))
* **core:** Only select executionData from DB when requested ([#21234](https://github.com/n8n-io/n8n/issues/21234)) ([4be0180](https://github.com/n8n-io/n8n/commit/4be0180f59be02e23c220343719a194500a8ba56))
* **core:** Protect against name-mangling in native Python runner ([#21482](https://github.com/n8n-io/n8n/issues/21482)) ([9a56529](https://github.com/n8n-io/n8n/commit/9a56529d5d9b6091ef2a599d190827d78eaa1407))
* **editor:** Fix `Cannot read properties of undefined` error in evaluation loop ([#21225](https://github.com/n8n-io/n8n/issues/21225)) ([27a3ce7](https://github.com/n8n-io/n8n/commit/27a3ce7d63e8801baa6fe2e4aa9bba4cfd26a061))
* **editor:** Fix event propagating and causing multiple telemetry calls for the same event ([#21385](https://github.com/n8n-io/n8n/issues/21385)) ([e551ce8](https://github.com/n8n-io/n8n/commit/e551ce850dcbf11f05b4210a8d663dfab323dbca))
* **editor:** Handle `executionFinished` event correctly for non-persisted executions ([#21333](https://github.com/n8n-io/n8n/issues/21333)) ([8e2f55b](https://github.com/n8n-io/n8n/commit/8e2f55b371b9bba40505ebf147610d5924a6d347))
* **editor:** Hide credentials setup button in read-only mode ([#21351](https://github.com/n8n-io/n8n/issues/21351)) ([638588e](https://github.com/n8n-io/n8n/commit/638588e728f527e83fb3fdfb1902941dea1e6e1c))
* **editor:** Keep loading executions initially until they fill up the sidebar ([#21279](https://github.com/n8n-io/n8n/issues/21279)) ([900b2c3](https://github.com/n8n-io/n8n/commit/900b2c3a6119ab9234c88cc0fc32252a2c72ef12))
* **editor:** Lowercase resource in `Create Workflow/Credential/Folder` button copy ([#21320](https://github.com/n8n-io/n8n/issues/21320)) ([56805ca](https://github.com/n8n-io/n8n/commit/56805ca000297a750a105ad32cfaad6a3bb83059))
* **editor:** Match user pagination options with API limits ([#21377](https://github.com/n8n-io/n8n/issues/21377)) ([b1243ce](https://github.com/n8n-io/n8n/commit/b1243ce06eb1f2ee78dbc2184eb70949359e5f37))
* **editor:** Prevent 'sin' text concatenation in execution display ([#21343](https://github.com/n8n-io/n8n/issues/21343)) ([f88f09c](https://github.com/n8n-io/n8n/commit/f88f09c0b7450c9477205dd7705587bc6b5e9db1))
* **editor:** Swap data table modal button order and fix copy ([#21318](https://github.com/n8n-io/n8n/issues/21318)) ([72ef61c](https://github.com/n8n-io/n8n/commit/72ef61c47953d54064db9533b3267337774d9145))
* Fix inconsistent insight date range query behaviour ([#21368](https://github.com/n8n-io/n8n/issues/21368)) ([440e83b](https://github.com/n8n-io/n8n/commit/440e83bdfc1e0bf822090e144bfff4abcd3dd3e2))
* Fix insights query date range calculation in backend ([#21409](https://github.com/n8n-io/n8n/issues/21409)) ([1a70592](https://github.com/n8n-io/n8n/commit/1a70592b120f7f7acc2800ef878f50fd0119d12b))
* **Google Calendar Node:** Fix event operation ([#21414](https://github.com/n8n-io/n8n/issues/21414)) ([c4b9470](https://github.com/n8n-io/n8n/commit/c4b947042734fa196f8f4e7a57959154d70bea56))
* **OpenAi Node:** Allow `additionalProperties: {}` in tools ([#21328](https://github.com/n8n-io/n8n/issues/21328)) ([866ff1b](https://github.com/n8n-io/n8n/commit/866ff1b504a85ba24e62dc48d7d5c486d2b02d45))
* Update packages for security fixes ([#21375](https://github.com/n8n-io/n8n/issues/21375)) ([c553c4d](https://github.com/n8n-io/n8n/commit/c553c4d56679f9477407c4f6ec394d0b374513d5))
* Update task runner to 1.4.1 ([#21481](https://github.com/n8n-io/n8n/issues/21481)) ([9dea202](https://github.com/n8n-io/n8n/commit/9dea2024cc48db054bf11c8b5ff72905161ec98c))
* **Xero Node:** Fix currency dropdown sending wrong value to API ([#19499](https://github.com/n8n-io/n8n/issues/19499)) ([49fabcf](https://github.com/n8n-io/n8n/commit/49fabcf4c16dc3dd3deabb9be39c9c51216c3f5d))


### Features

* Add credential tests for ConvertKit, FormIo ([#20361](https://github.com/n8n-io/n8n/issues/20361)) ([8ba12d9](https://github.com/n8n-io/n8n/commit/8ba12d98b2491ee508171f604fb4c3be23d0123f))
* **ai-builder:** Categorize prompts for taxonomy approach ([#20862](https://github.com/n8n-io/n8n/issues/20862)) ([409462b](https://github.com/n8n-io/n8n/commit/409462b09d9ff7ed8ced9ddd9fcf3cb63edb5338))
* **ai-builder:** Check sub-nodes are connected to root node ([#21330](https://github.com/n8n-io/n8n/issues/21330)) ([7c0d1db](https://github.com/n8n-io/n8n/commit/7c0d1db43c03c4115820dace7efb4c59cad4eeb5))
* **API:** Improve workflow settings specs in public API ([#21297](https://github.com/n8n-io/n8n/issues/21297)) ([e356d54](https://github.com/n8n-io/n8n/commit/e356d546a1fc1253feeb01afe08f772f5716a979))
* AWS Assume role credentials ([#20626](https://github.com/n8n-io/n8n/issues/20626)) ([f65b6a8](https://github.com/n8n-io/n8n/commit/f65b6a82a95f0fd298422faa5f6cf3f69bbd3249))
* **Bitbucket Trigger Node:** Access token credentials ([#20912](https://github.com/n8n-io/n8n/issues/20912)) ([6ec2c82](https://github.com/n8n-io/n8n/commit/6ec2c820f426b7c87f1f3d0a66d1c6113b0c50ff))
* **core:** Build workflow index on server start and workflow updates ([#21441](https://github.com/n8n-io/n8n/issues/21441)) ([6df508f](https://github.com/n8n-io/n8n/commit/6df508fa1dc08a697c77a2ab6bb56ca25e03b882))
* **core:** Create breaking change audit rule engine ([#20918](https://github.com/n8n-io/n8n/issues/20918)) ([7d4ec36](https://github.com/n8n-io/n8n/commit/7d4ec363f8ee364bf60f6e02d0d1232cb434c24e))
* **core:** Implement EULA acceptance handling in license activation process ([#21095](https://github.com/n8n-io/n8n/issues/21095)) ([ef9d9f4](https://github.com/n8n-io/n8n/commit/ef9d9f43cea569a38c8de38d7700fa157ac0ec72))
* **core:** Introduce distroless runners image ([#21389](https://github.com/n8n-io/n8n/issues/21389)) ([eb62988](https://github.com/n8n-io/n8n/commit/eb629887dc5e1e5d8d4be8c3488cb966c3707662))
* **core:** Only allow relative redirects on SAML login ([#21266](https://github.com/n8n-io/n8n/issues/21266)) ([77badda](https://github.com/n8n-io/n8n/commit/77badda95b69ac07bd067d701b3ea9fbcac39fd9))
* **core:** Use custom agent to handle http(s) proxies ([#21264](https://github.com/n8n-io/n8n/issues/21264)) ([8987659](https://github.com/n8n-io/n8n/commit/8987659813605e562ca0028dd4b16276228652fb))
* Deprecate insights dateRange query filter ([#21233](https://github.com/n8n-io/n8n/issues/21233)) ([ab269f6](https://github.com/n8n-io/n8n/commit/ab269f6bb885d27b4a365c1e65340da4e954ab44))
* **editor:** Add `Create variable` button to project overview ([#21348](https://github.com/n8n-io/n8n/issues/21348)) ([c41eefd](https://github.com/n8n-io/n8n/commit/c41eefd560be7e5cf93ccf96babac2e2bbf9e700))
* **editor:** Add meta information in telemetry property ([#21350](https://github.com/n8n-io/n8n/issues/21350)) ([284939f](https://github.com/n8n-io/n8n/commit/284939ffdc993c02d4c8e18206a12c9e41e5b141))
* **editor:** Allow duplicate and import in workflow menu if user has update permission ([#21338](https://github.com/n8n-io/n8n/issues/21338)) ([64929cf](https://github.com/n8n-io/n8n/commit/64929cf79c7e6aa24c6a111ec40f7a3c56fdaf19))
* **editor:** Auto-select all credentials by default in push modal ([#21216](https://github.com/n8n-io/n8n/issues/21216)) ([cd403bd](https://github.com/n8n-io/n8n/commit/cd403bda12379381b5828ea786824b4c38ac6433))
* **editor:** Dynamic banners support ([#21045](https://github.com/n8n-io/n8n/issues/21045)) ([2cb8e84](https://github.com/n8n-io/n8n/commit/2cb8e843588284bf5bf0a3d9251d5b3b9f182edb))
* **editor:** Implement EULA acceptance modal and integrate with license activation flow ([#21027](https://github.com/n8n-io/n8n/issues/21027)) ([9767afd](https://github.com/n8n-io/n8n/commit/9767afde196b93186a6423e154f651664ec83cb4))
* **editor:** Remove beta labels from Data table feature ([#21322](https://github.com/n8n-io/n8n/issues/21322)) ([8f5bc13](https://github.com/n8n-io/n8n/commit/8f5bc139d875171484aa596ee165c223e1085ddb))
* **Guardrails Node:** Add new node ([#20755](https://github.com/n8n-io/n8n/issues/20755)) ([453f908](https://github.com/n8n-io/n8n/commit/453f90816b1193f042458084f46bb957ca2ae7b1))
* **MCP Client Tool Node:** Add support for OAuth2 with Dynamic Client Registration ([#21034](https://github.com/n8n-io/n8n/issues/21034)) ([6177f67](https://github.com/n8n-io/n8n/commit/6177f67d99468d1c133f54a357681d6af1b08d50))
* **OpenAI Node:** Add Responses API support to chat model ([#20969](https://github.com/n8n-io/n8n/issues/20969)) ([5312358](https://github.com/n8n-io/n8n/commit/5312358ae5aad8dc5a98732595c85a52921fdae3))
* Support dynamic node icons using expressions ([#20814](https://github.com/n8n-io/n8n/issues/20814)) ([71de992](https://github.com/n8n-io/n8n/commit/71de992eb9181543960d6d509efaef6ef5146293))



# [1.118.0](https://github.com/n8n-io/n8n/compare/n8n@1.117.0...n8n@1.118.0) (2025-10-27)


### Bug Fixes

* **AI Agent Node:** Only use ai-tool output when reconstructing steps ([#21061](https://github.com/n8n-io/n8n/issues/21061)) ([255db6a](https://github.com/n8n-io/n8n/commit/255db6a268260b13075dc861c0a96b5bdaad9d3b))
* **AI Agent Node:** Respect maxIterations parameter ([#21081](https://github.com/n8n-io/n8n/issues/21081)) ([4ea2757](https://github.com/n8n-io/n8n/commit/4ea2757df67519c0b7e1de19a35c55d74ed93266))
* **ai-builder:** Auto-generate names only for workflows with default names ([#21162](https://github.com/n8n-io/n8n/issues/21162)) ([4a4d1fe](https://github.com/n8n-io/n8n/commit/4a4d1feffb07a1beef77d2278e2e943909ba4657))
* **ai-builder:** Format user message to avoid markdown formatting errors ([#21033](https://github.com/n8n-io/n8n/issues/21033)) ([70523e1](https://github.com/n8n-io/n8n/commit/70523e19c813ce290aa8bfcb0fc3ecafe0226139))
* **ai-builder:** Prompt input scrolling fix and update max line from 6 -> 10 ([#21165](https://github.com/n8n-io/n8n/issues/21165)) ([3caa5ac](https://github.com/n8n-io/n8n/commit/3caa5ac3a5bfe38b5364be171cf32945978cc8e8))
* **Call n8n Sub-Workflow Tool Node:** Fix return format for execute path ([#21010](https://github.com/n8n-io/n8n/issues/21010)) ([b9b322e](https://github.com/n8n-io/n8n/commit/b9b322edacd556c7d4b8718ae487e8ca04862bc4))
* **core:** Check all parents of subnodes for expression resolution ([#21141](https://github.com/n8n-io/n8n/issues/21141)) ([1c4b838](https://github.com/n8n-io/n8n/commit/1c4b838512fdd47e1591f0791d4fe2bf93685de2))
* **core:** Handle rejected promises from Rudderstack SDK ([#21083](https://github.com/n8n-io/n8n/issues/21083)) ([520a9d4](https://github.com/n8n-io/n8n/commit/520a9d4940f450bb2bfb30d7878041dc86a2cf79))
* **editor:** Close NDV on AI Builder message ([#21158](https://github.com/n8n-io/n8n/issues/21158)) ([f37864e](https://github.com/n8n-io/n8n/commit/f37864e09918ee6680447033cf4e1e7dde213a71))
* **editor:** Fix tool params schema for object and array fields ([#20956](https://github.com/n8n-io/n8n/issues/20956)) ([b2e0f8c](https://github.com/n8n-io/n8n/commit/b2e0f8cdc0058fb764c37964864858327405f2d1))
* **editor:** Icon picker always on top ([#21116](https://github.com/n8n-io/n8n/issues/21116)) ([9d764d0](https://github.com/n8n-io/n8n/commit/9d764d06e3b8a713e33c6b305cd71990b612f5e5))
* **HTTP Request Node:** Fix expression value handling in `url` parameter ([#21101](https://github.com/n8n-io/n8n/issues/21101)) ([0a82e8d](https://github.com/n8n-io/n8n/commit/0a82e8d23bab97c1367a63b7cd35646d7f8781d0))
* **Merge Node:** Block file access for alasql ([#20858](https://github.com/n8n-io/n8n/issues/20858)) ([79f1cca](https://github.com/n8n-io/n8n/commit/79f1cca9af0ad92b08356cbd2f70d83f512edb6e))
* **n8n Form Node:** From trigger selection ([#21069](https://github.com/n8n-io/n8n/issues/21069)) ([8b42820](https://github.com/n8n-io/n8n/commit/8b428201638b9fe20ac22a2e797256a07a9b28ca))
* **OpenAI Node:** Don't include function calls when conversation id is used ([#21047](https://github.com/n8n-io/n8n/issues/21047)) ([2fff388](https://github.com/n8n-io/n8n/commit/2fff38827ae0e61bad951bfe36a5c40ca9e86aac))
* Pin `@lezer/common` version ([#21074](https://github.com/n8n-io/n8n/issues/21074)) ([30ac847](https://github.com/n8n-io/n8n/commit/30ac8476a240b5a33c9ea429483c652e5eacccf9))
* Sanitize cURL URLs with <PLACEHOLDER> to {PLACEHOLDER} ([#21032](https://github.com/n8n-io/n8n/issues/21032)) ([1e2bd08](https://github.com/n8n-io/n8n/commit/1e2bd08edc81c8a6778143f2d979dc243bd05ac6))
* Update playwright version ([#21096](https://github.com/n8n-io/n8n/issues/21096)) ([e61de6f](https://github.com/n8n-io/n8n/commit/e61de6fc0dc42cc41e5a3a96f0ed7e04361fe969))
* Use correct enum import in CLI node templates ([#20950](https://github.com/n8n-io/n8n/issues/20950)) ([1853108](https://github.com/n8n-io/n8n/commit/18531086a91a1f7e0c503b87deee1ca2e2da668d))


### Features

* Add logic to parse and apply global roles for sso provisioning ([#21007](https://github.com/n8n-io/n8n/issues/21007)) ([dc1437f](https://github.com/n8n-io/n8n/commit/dc1437fd0043b67c2d0d8ab9ad5ed76630278314))
* Add past execution schema viewing in NDV ([#20954](https://github.com/n8n-io/n8n/issues/20954)) ([4698b93](https://github.com/n8n-io/n8n/commit/4698b93a5a205f419edf40b423460e72abaa4155))
* Add patch endpoint and reload mechanisms for sso provisioning configuration ([#20904](https://github.com/n8n-io/n8n/issues/20904)) ([ef688de](https://github.com/n8n-io/n8n/commit/ef688de6dcddcb58aca8ab639f7b89ce5ec2f420))
* **ai-builder:** Properly separate system and user prompts in AI nodes  ([#21068](https://github.com/n8n-io/n8n/issues/21068)) ([8659a73](https://github.com/n8n-io/n8n/commit/8659a73e31555450753fc8b5b47305cd30ec2000))
* Allow OIDC logins to sync instance roles ([#21055](https://github.com/n8n-io/n8n/issues/21055)) ([fcbf143](https://github.com/n8n-io/n8n/commit/fcbf1433f6b7715be52333b91fc2663e7a8193e7))
* **core:** Add an incrementing version counter for the workflow entity ([#20816](https://github.com/n8n-io/n8n/issues/20816)) ([dd61458](https://github.com/n8n-io/n8n/commit/dd6145879fa7866a510482bb999318b8934977cd))
* **core:** Add programmatic workflow validation in AI workflow builder ([#20998](https://github.com/n8n-io/n8n/issues/20998)) ([fa7cdf3](https://github.com/n8n-io/n8n/commit/fa7cdf39bdd2daff8710460d8c584f7dd43d0966))
* **core:** Handle project variables sync on source control ([#21001](https://github.com/n8n-io/n8n/issues/21001)) ([832774d](https://github.com/n8n-io/n8n/commit/832774db805dc72c313baabb6fc37704fb658f59))
* **core:** Support `N8N_BLOCK_RUNNER_ENV_ACCESS` in native Python runner ([#21215](https://github.com/n8n-io/n8n/issues/21215)) ([8527e4b](https://github.com/n8n-io/n8n/commit/8527e4b6f1b35472ac472e5c3857cb0e072acb0a))
* **editor:** Add custom date range options to insights dashboard ([#20952](https://github.com/n8n-io/n8n/issues/20952)) ([bf873e3](https://github.com/n8n-io/n8n/commit/bf873e37c7c6a5c48d3eb61a1dc78c00f0870bc9))
* **editor:** Remove flag for project variables ([#21037](https://github.com/n8n-io/n8n/issues/21037)) ([8e7eb98](https://github.com/n8n-io/n8n/commit/8e7eb98ec65db50a0f23e25f164a52b9a0e88d77))
* Improve tests for loginUser ([#21144](https://github.com/n8n-io/n8n/issues/21144)) ([85fb6e4](https://github.com/n8n-io/n8n/commit/85fb6e4a8b387e4fc86a2a5a53631638d5d2d04c))
* Only publish provisioning config changes on multi-main ([#21134](https://github.com/n8n-io/n8n/issues/21134)) ([65b6b0e](https://github.com/n8n-io/n8n/commit/65b6b0e4d8d2a2b91ae342055a11388df9d467ee))
* **OpenAI Node:** Remove built-in MCP from V2 ([#21159](https://github.com/n8n-io/n8n/issues/21159)) ([12833ea](https://github.com/n8n-io/n8n/commit/12833eaf42974c0f5d0fb2df801d0e9a7c328457))
* **OpenAI Node:** Remove completions from V2 ([#21078](https://github.com/n8n-io/n8n/issues/21078)) ([1d41e47](https://github.com/n8n-io/n8n/commit/1d41e47af115b0dcd7476235a79140678d69899f))
* Parse and apply provisioned project role mappings ([#21025](https://github.com/n8n-io/n8n/issues/21025)) ([ca624c6](https://github.com/n8n-io/n8n/commit/ca624c65b549f9e8522e1a787acd066e1434c7b8))
* Provision project roles from OIDC SSO ([#21107](https://github.com/n8n-io/n8n/issues/21107)) ([fa4c979](https://github.com/n8n-io/n8n/commit/fa4c979945faf6c836d74198e82fbcb1780e0af9))
* Reduce unauthentication information in settings endpoint ([#21133](https://github.com/n8n-io/n8n/issues/21133)) ([c859f4e](https://github.com/n8n-io/n8n/commit/c859f4e7932695059718ade5e601cf59baf0ac07))
* Support values configuration type for credentials in MongoDB Vector Store ([#20888](https://github.com/n8n-io/n8n/issues/20888)) ([701f4f8](https://github.com/n8n-io/n8n/commit/701f4f8f29f0e141a48f0ee1d3e609a4ac054d55))
* Trigger projects export and import on push and pull ([#20459](https://github.com/n8n-io/n8n/issues/20459)) ([333ce1f](https://github.com/n8n-io/n8n/commit/333ce1f105022ef4a8fae02c4a7952b464c58d09))
* Wire up saml to instance role provisioning ([#21080](https://github.com/n8n-io/n8n/issues/21080)) ([b8a62c8](https://github.com/n8n-io/n8n/commit/b8a62c893f7356e651d1ac1d9d337fa89b05e52a))



# [1.117.0](https://github.com/n8n-io/n8n/compare/n8n@1.116.0...n8n@1.117.0) (2025-10-21)


### Bug Fixes

* **AI Agent Node:** Track source node toolkit tools are executed from ([#20866](https://github.com/n8n-io/n8n/issues/20866)) ([e195677](https://github.com/n8n-io/n8n/commit/e1956779437f6ad538d12710788cbcebbd924c27))
* **ai-builder:** Accept empty expressionValues in builder request ([#20993](https://github.com/n8n-io/n8n/issues/20993)) ([3f9866e](https://github.com/n8n-io/n8n/commit/3f9866e8f69c7ac69e5d7713d7967baa29feef99))
* **ai-builder:** AI builder memory consumption issue ([#20982](https://github.com/n8n-io/n8n/issues/20982)) ([b4a92f3](https://github.com/n8n-io/n8n/commit/b4a92f32f607394788be5f389371f1e8020d0ed2))
* **ai-builder:** Assistant side panel open without blocking calls ([#20714](https://github.com/n8n-io/n8n/issues/20714)) ([39b7966](https://github.com/n8n-io/n8n/commit/39b79665ab688417999b6a903d95bfb38733a7e6))
* **ai-builder:** Submit AI workflow builder prompt on enter, newline on shift+enter ([#20863](https://github.com/n8n-io/n8n/issues/20863)) ([5b5cef8](https://github.com/n8n-io/n8n/commit/5b5cef8e00d8868951bb62c44f82d0634f812448))
* **Call n8n Sub-Workflow Tool Node:** Return structured data from Workflow Tool when called by engine ([#20869](https://github.com/n8n-io/n8n/issues/20869)) ([44d1835](https://github.com/n8n-io/n8n/commit/44d1835797173efc8e089a9fbd34c14bc21eef8d))
* **core:** Fix folders file overwrite for admin on push ([#20813](https://github.com/n8n-io/n8n/issues/20813)) ([4a3e7d7](https://github.com/n8n-io/n8n/commit/4a3e7d7aecf094c7bb6b04b214cf264cd4c96632))
* **core:** Fix normalization in per-item mode in native Python runner ([#20750](https://github.com/n8n-io/n8n/issues/20750)) ([2224647](https://github.com/n8n-io/n8n/commit/2224647fa6cf5a1ec517bdadca3ee8c2fa096016))
* **core:** Prevent binary payload duplication in JS runner ([#20753](https://github.com/n8n-io/n8n/issues/20753)) ([f193b7a](https://github.com/n8n-io/n8n/commit/f193b7a619a5695efb019d3ed8c51f52f1002771))
* **core:** Prevent duplicate nodeExecuteBefore events for agent nodes ([#20726](https://github.com/n8n-io/n8n/issues/20726)) ([d4cd6bf](https://github.com/n8n-io/n8n/commit/d4cd6bf79fe9036995319adee541d887129b2cf9))
* **core:** Proxy all HTTP traffic instead of only axios ([#20614](https://github.com/n8n-io/n8n/issues/20614)) ([f41b864](https://github.com/n8n-io/n8n/commit/f41b86402e59668c8354c0ca5dfa10eea9763afb))
* **core:** Set rfc3164 option to false for syslog client initialization ([#20664](https://github.com/n8n-io/n8n/issues/20664)) ([bdcb049](https://github.com/n8n-io/n8n/commit/bdcb049859e8ebd1b5f8c6d87aa9243f7528aa00))
* **core:** Stop task process correctly in native Python runner ([#20840](https://github.com/n8n-io/n8n/issues/20840)) ([c560f05](https://github.com/n8n-io/n8n/commit/c560f05a39e0f1eea1a15397530697df05ed6a70))
* Detect resource owner change in source control ([#20811](https://github.com/n8n-io/n8n/issues/20811)) ([e12df06](https://github.com/n8n-io/n8n/commit/e12df06f8d301a441c8322fff0511d959e684a0a))
* **editor:** Disallow drag-and-drop for non-immediate-ancestors of Python code node ([#20773](https://github.com/n8n-io/n8n/issues/20773)) ([0fab5ea](https://github.com/n8n-io/n8n/commit/0fab5ea3d3a4b3555b04d3bfb3bc6d257194aae0))
* **editor:** Enhance error handling and toast notifications in WorkflowDiffModal ([#20812](https://github.com/n8n-io/n8n/issues/20812)) ([2ee3d26](https://github.com/n8n-io/n8n/commit/2ee3d26657dd3575aa90a7ea40f4f3095ffb0b95))
* **editor:** Expand URL validation to accept any HTTPS URL for workflow import instead of requiring a .json extension ([#20509](https://github.com/n8n-io/n8n/issues/20509)) ([f0a3978](https://github.com/n8n-io/n8n/commit/f0a3978b62ed1be2f077d99f5161e4673261e4f7))
* **editor:** Fetch workflow and version in parallel to prevent double render flicker ([#20568](https://github.com/n8n-io/n8n/issues/20568)) ([76969eb](https://github.com/n8n-io/n8n/commit/76969ebc60f32e595e9032d8d1c4788c30d12c13))
* **editor:** Fix command bar test workflow command issue ([#20910](https://github.com/n8n-io/n8n/issues/20910)) ([be27e94](https://github.com/n8n-io/n8n/commit/be27e94cb5fa6aa4038f645f26bd7bc5aa0b51e4))
* **editor:** Hide Execute and refine section when error occurs after workflow update ([#20876](https://github.com/n8n-io/n8n/issues/20876)) ([3d9d19e](https://github.com/n8n-io/n8n/commit/3d9d19ef815d7d3a8953f904cd7c3e274b571f6c))
* **editor:** Update ProjectSettings UI to always show save/cancel buttons and add search functionality for members ([#20828](https://github.com/n8n-io/n8n/issues/20828)) ([fa02786](https://github.com/n8n-io/n8n/commit/fa0278647e8075a1d6936308198f18ced88fd820))
* **editor:** Use existing workflowState when setting node execution issues ([#20777](https://github.com/n8n-io/n8n/issues/20777)) ([ef89640](https://github.com/n8n-io/n8n/commit/ef89640dea0e99fee9c8f0b579e6629560e73f23))
* **Embeddings OpenAI Node:** Add encodingFormat parameter to fix LM Studio compatibility ([#20877](https://github.com/n8n-io/n8n/issues/20877)) ([61b8dbc](https://github.com/n8n-io/n8n/commit/61b8dbc68c7b99d02473c059cefe382ee2953d72))
* Fix source control pull information toast ([#20787](https://github.com/n8n-io/n8n/issues/20787)) ([fbb35d4](https://github.com/n8n-io/n8n/commit/fbb35d432c0c30f9caea8502099dd32fd265bf6a))
* **Gmail Trigger Node:** Prevent missing emails between polling intervals ([#20794](https://github.com/n8n-io/n8n/issues/20794)) ([f3ebf05](https://github.com/n8n-io/n8n/commit/f3ebf05c9289fc0a6e3927b3328893114e9cf299))
* **HTTP Request Node:** Support array in query request parrameters ([#20510](https://github.com/n8n-io/n8n/issues/20510)) ([54dcfde](https://github.com/n8n-io/n8n/commit/54dcfde855b7f4a1456f796b69f2cd44415e4001))
* **LM Chat Azure OpenAI Node:** Set model name to ensure correct internal logic ([#20893](https://github.com/n8n-io/n8n/issues/20893)) ([24f1ad9](https://github.com/n8n-io/n8n/commit/24f1ad92f6250e31e6ac14d708032e97f7728b41))
* **Mistral Cloud Chat Mode Node:** Support JSON response from latest Magistral models ([#20853](https://github.com/n8n-io/n8n/issues/20853)) ([b8f43d3](https://github.com/n8n-io/n8n/commit/b8f43d32cd761fe80ae245b43dfb206e71bd8971))
* MongoDB connection string parameter marked as password ([#20868](https://github.com/n8n-io/n8n/issues/20868)) ([1eccd74](https://github.com/n8n-io/n8n/commit/1eccd74ecfb23ab51233e8a302dab92d9b3d3e64))
* **n8n Form Node:** CSP headers should not be set on response with redirect ([#20864](https://github.com/n8n-io/n8n/issues/20864)) ([7f651ca](https://github.com/n8n-io/n8n/commit/7f651ca5a3162ba0f13242dc934047e32998b33c))
* **Notion Node:** Fix typo in Notion 'Operation' options ([#20809](https://github.com/n8n-io/n8n/issues/20809)) ([b32c8ce](https://github.com/n8n-io/n8n/commit/b32c8cef6e260ffa73d1e6480ab52c01c10a011f))
* **OpenAI Node:** Re-enable list of models for non-OpenAI providers ([#20647](https://github.com/n8n-io/n8n/issues/20647)) ([131a57e](https://github.com/n8n-io/n8n/commit/131a57e0eb6a34a02cd6689ce74e3be8ffeec1c1))
* **OpenAI Node:** Remove `local shell`, update `simplify output` logic ([#20957](https://github.com/n8n-io/n8n/issues/20957)) ([f282b02](https://github.com/n8n-io/n8n/commit/f282b0272ebe38a0b1af891b2ad7af0d751cb08d))
* **OpenAI Node:** Rename "Create" to "Generate" ([#20905](https://github.com/n8n-io/n8n/issues/20905)) ([d20a2e5](https://github.com/n8n-io/n8n/commit/d20a2e585e93e9fa3ccb69ee1221d72a4c13389b))
* **Qdrant Vector Store Node:** Add support for custom content and metadata keys ([#20873](https://github.com/n8n-io/n8n/issues/20873)) ([049c599](https://github.com/n8n-io/n8n/commit/049c599af27f51ef3116c6244d949c6a1da78c44))
* **Sentry.io Node:** Add credential tests and authenticate methods, fix self-hosted credentials ([#20195](https://github.com/n8n-io/n8n/issues/20195)) ([11f8a3f](https://github.com/n8n-io/n8n/commit/11f8a3fb6ec586d9997c3d846680d1d9b10f4df4))
* **Slack Node:** Fix incorrect option name stopping user groups from working ([#20660](https://github.com/n8n-io/n8n/issues/20660)) ([7edbd7d](https://github.com/n8n-io/n8n/commit/7edbd7dea1a70e7961078f775ad03ada4660d228))


### Features

* Add GET /sso/provisioning/config endpoint for sso provisioning config ([#20850](https://github.com/n8n-io/n8n/issues/20850)) ([c40aaa5](https://github.com/n8n-io/n8n/commit/c40aaa557559acc483a6b3fac92152bbe1f33fc8))
* Add new env vars for sso provisioning configuration ([#20749](https://github.com/n8n-io/n8n/issues/20749)) ([28a4e2c](https://github.com/n8n-io/n8n/commit/28a4e2c418be6b398be8f76eceeeb25982117ebb))
* **ai-builder:** Increase prompt limit to 5000 characters ([#20865](https://github.com/n8n-io/n8n/issues/20865)) ([f37e7c2](https://github.com/n8n-io/n8n/commit/f37e7c2ab1fb3389a9750171d07f7d919d42511e))
* **ai-builder:** Optimize Anthropic prompt caching with 4-breakpoint strategy ([#20484](https://github.com/n8n-io/n8n/issues/20484)) ([3afb4db](https://github.com/n8n-io/n8n/commit/3afb4db4ae966604a2f07257bd8c1d597cb3727a))
* **Anthropic Node:** Support custom headers for model requests ([#20253](https://github.com/n8n-io/n8n/issues/20253)) ([7706ec8](https://github.com/n8n-io/n8n/commit/7706ec82c01d9aa22b0c88996bfc77298ae0fcce))
* Assign owner to pulled resources  ([#20920](https://github.com/n8n-io/n8n/issues/20920)) ([cec27a8](https://github.com/n8n-io/n8n/commit/cec27a89be29812b0aa51638f5850ac59f7abce9))
* **core:** Add telemetry to monitor project variables usage ([#20593](https://github.com/n8n-io/n8n/issues/20593)) ([fbe2783](https://github.com/n8n-io/n8n/commit/fbe27837f13471934cb4f7fd1b8fe23baecdd509))
* **core:** Database migration to add workflow dependency index table ([#20723](https://github.com/n8n-io/n8n/issues/20723)) ([ed3b19a](https://github.com/n8n-io/n8n/commit/ed3b19a3dedd073ec823fa48563565a8280a327f))
* **editor, ai-builder:** Add resolved expressions context to AI builder ([#20605](https://github.com/n8n-io/n8n/issues/20605)) ([5c74a0b](https://github.com/n8n-io/n8n/commit/5c74a0bb6cc38fe9ba181036db7922de2c33438a))
* **editor:** Add custom roles CRUD UI ([#19224](https://github.com/n8n-io/n8n/issues/19224)) ([d4eb0bb](https://github.com/n8n-io/n8n/commit/d4eb0bb86814acc2886010a746d00203083740aa))
* **editor:** Auto-assign credentials to other nodes ([#20722](https://github.com/n8n-io/n8n/issues/20722)) ([5130c11](https://github.com/n8n-io/n8n/commit/5130c11db78952130ed9a67a03f42321d3e4e942))
* **editor:** Enable rendering verified nodes in preview service ([#20065](https://github.com/n8n-io/n8n/issues/20065)) ([1c07bba](https://github.com/n8n-io/n8n/commit/1c07bba8b3aa5b0125ef27ffc20528711b043acf))
* **editor:** Make the main create resource button aware of the selected tab ([#20725](https://github.com/n8n-io/n8n/issues/20725)) ([7aa2f48](https://github.com/n8n-io/n8n/commit/7aa2f48fde0deda872a6f3c9dd344d1752026c0e))
* **Lemonade Model Node:** Add Lemonade server as a node ([#20557](https://github.com/n8n-io/n8n/issues/20557)) ([f310b13](https://github.com/n8n-io/n8n/commit/f310b134a7a965a243f5d0bc2abd8395f09f64e3))
* **OpenAI Node:** Add Responses API and video generation support ([#20657](https://github.com/n8n-io/n8n/issues/20657)) ([91c09bb](https://github.com/n8n-io/n8n/commit/91c09bb9dd9c0fb76e681316f9dd60b635a2705f))
* **oracleDb Node:** Add Oracle Database SQL Node ([#20867](https://github.com/n8n-io/n8n/issues/20867)) ([b211401](https://github.com/n8n-io/n8n/commit/b21140180e32c335ad0392adf618d33ba05e2838))
* SSO provisioning settings UI ([#20961](https://github.com/n8n-io/n8n/issues/20961)) ([04438f8](https://github.com/n8n-io/n8n/commit/04438f8f97312573dcb1335f0284e82b26662371))


### Performance Improvements

* **core:** Optimize hot paths in native Python runner ([#20844](https://github.com/n8n-io/n8n/issues/20844)) ([a4264f0](https://github.com/n8n-io/n8n/commit/a4264f077dfc412a4571e7fab5165411449c5ec0))



# [1.116.0](https://github.com/n8n-io/n8n/compare/n8n@1.115.0...n8n@1.116.0) (2025-10-13)


### Bug Fixes

* **ai-builder:** Fix loading of Data Table nodes for AI Builder ([#20546](https://github.com/n8n-io/n8n/issues/20546)) ([c21968d](https://github.com/n8n-io/n8n/commit/c21968db3d05d706cba199fb101f04a637132271))
* **core:** Block introspection attributes unconditionally ([#20641](https://github.com/n8n-io/n8n/issues/20641)) ([7ae88f8](https://github.com/n8n-io/n8n/commit/7ae88f836c13d81118231fe80e8329a81bd29e26))
* **core:** Fix broker websocket connection closure on runner heartbeat failure ([#20584](https://github.com/n8n-io/n8n/issues/20584)) ([892cc82](https://github.com/n8n-io/n8n/commit/892cc8254dcab13290d88baacc3ad0a3f1224645))
* **core:** Fix N8N_ENCRYPTION_KEY_FILE environment variable not working ([#20230](https://github.com/n8n-io/n8n/issues/20230)) ([502dd71](https://github.com/n8n-io/n8n/commit/502dd71811df9b9a466584418f41668345791ecc))
* **core:** Fix worker setup completion ([#20495](https://github.com/n8n-io/n8n/issues/20495)) ([8f042a6](https://github.com/n8n-io/n8n/commit/8f042a6c133c9005014f1448470a886b83a76d47))
* **core:** Make sure scopes are deleted after rename ([#20498](https://github.com/n8n-io/n8n/issues/20498)) ([a998e1d](https://github.com/n8n-io/n8n/commit/a998e1d025cf29fd92e229429f00c6c7c773c2dc))
* **core:** Only resume waiting parent workflows ([#20342](https://github.com/n8n-io/n8n/issues/20342)) ([bebccfd](https://github.com/n8n-io/n8n/commit/bebccfdb9388667989d293c205d9620ec6098121))
* **core:** Prevent re-imported scheduled workflow to execute twice  ([#20438](https://github.com/n8n-io/n8n/issues/20438)) ([8f7f480](https://github.com/n8n-io/n8n/commit/8f7f48043b28fc41254b6bc71eb13fe025a0eb37))
* **core:** Prevent subscript access to blocked attributes ([#20710](https://github.com/n8n-io/n8n/issues/20710)) ([0026b6b](https://github.com/n8n-io/n8n/commit/0026b6b6b0de5b84fc6ed9b8988d7e9f82a4d23f))
* **core:** Remove logs skipping flag from native Python runner ([#20441](https://github.com/n8n-io/n8n/issues/20441)) ([123a742](https://github.com/n8n-io/n8n/commit/123a7426852b1a3a7a575e51e0c1207764d0ca3f))
* **core:** Retain source overwrite in paired items in tool executions ([#20629](https://github.com/n8n-io/n8n/issues/20629)) ([6f368c3](https://github.com/n8n-io/n8n/commit/6f368c326d219f23cd508c2cf295a804988d15ec))
* **core:** Return insights when only one day is selected ([#20543](https://github.com/n8n-io/n8n/issues/20543)) ([dc72c23](https://github.com/n8n-io/n8n/commit/dc72c23d6ad67d09a48ffdec3de3fda565fccf8e))
* **core:** Solve intermittent typeorm-related build errors for `QueryDeepPartialEntity` ([#20556](https://github.com/n8n-io/n8n/issues/20556)) ([dfb1851](https://github.com/n8n-io/n8n/commit/dfb185151647e79f94d3ba11387d6d6c8c3a11b3))
* **core:** Tighten Sentry error filtering in native Python runner ([#20500](https://github.com/n8n-io/n8n/issues/20500)) ([bcdbada](https://github.com/n8n-io/n8n/commit/bcdbada74b25e2b5c8617bee0f7b62a6c4c97c2e))
* **editor:** Compact large ITaskDataConnections before sending to AI Builder ([#20545](https://github.com/n8n-io/n8n/issues/20545)) ([e58480f](https://github.com/n8n-io/n8n/commit/e58480f901126d9a62fdef5153808329ea2db7f4))
* **editor:** Fix data table add row missing border ([#20514](https://github.com/n8n-io/n8n/issues/20514)) ([799634f](https://github.com/n8n-io/n8n/commit/799634fa45bf792720c12f10e73226d662298014))
* **editor:** Fix inputs when extracting sub-workflows with Split Out nodes ([#19923](https://github.com/n8n-io/n8n/issues/19923)) ([fa64bf1](https://github.com/n8n-io/n8n/commit/fa64bf1ef35773a665fe4a7ffb80d455350f1eab))
* **editor:** Input/output panel in log view shows "N of N item(s)" when nothing matched ([#20224](https://github.com/n8n-io/n8n/issues/20224)) ([9b46bf6](https://github.com/n8n-io/n8n/commit/9b46bf65f38cf16896f98360aa23dd43e5bd2ac6))
* **editor:** Keep source control and user area fixed to bottom of sidebar ([#20530](https://github.com/n8n-io/n8n/issues/20530)) ([0f28b3f](https://github.com/n8n-io/n8n/commit/0f28b3f75676ac30fddc219c2882b747308eac80))
* **editor:** New NDV design tweaks ([#19903](https://github.com/n8n-io/n8n/issues/19903)) ([ca84331](https://github.com/n8n-io/n8n/commit/ca84331761b00ccaa31ae82cc562cb9f43493cfc))
* **editor:** Rename property names in event ([#20537](https://github.com/n8n-io/n8n/issues/20537)) ([32573ca](https://github.com/n8n-io/n8n/commit/32573caae136cd6d9d0e3b403509869141f16925))
* **editor:** Set warning limit to 80% of max limit for data tables ([#20613](https://github.com/n8n-io/n8n/issues/20613)) ([fb94b77](https://github.com/n8n-io/n8n/commit/fb94b779c8de6ead9d6d8d2075a71b1fbb50091f))
* **Extract from File Node:** Fix xlsx data read when readAsString is true ([#20565](https://github.com/n8n-io/n8n/issues/20565)) ([1a8b6e1](https://github.com/n8n-io/n8n/commit/1a8b6e190194c3159ab90af39a1e02658e3d4dd4))
* **Github Node:** Fix GitHub node no longer shows repo owner for Get Issues operation ([#20580](https://github.com/n8n-io/n8n/issues/20580)) ([3d74c3e](https://github.com/n8n-io/n8n/commit/3d74c3ee9ec7f0c812db6b2c39e3e23eb2a14b34))
* **Google Workspace Admin Node:** Rename userId to userKey ([#15940](https://github.com/n8n-io/n8n/issues/15940)) ([65b1df9](https://github.com/n8n-io/n8n/commit/65b1df921063ab3781152fea067062b9b0e0e402))
* **HTTP Request Node:** Body must be stringified while using AWS credentials ([#20526](https://github.com/n8n-io/n8n/issues/20526)) ([c28ac73](https://github.com/n8n-io/n8n/commit/c28ac73e66b7d72b61b6a1b3aab530fdd355cfe4))
* Invalid secret expression value for AWS secret keys containing / ([#20433](https://github.com/n8n-io/n8n/issues/20433)) ([f46b5e1](https://github.com/n8n-io/n8n/commit/f46b5e16406b31fbebfa85e0168f45acb3a291af))
* **Microsoft Graph Security Node:** Add missing offline_access scope to credentials ([#20532](https://github.com/n8n-io/n8n/issues/20532)) ([8dd7c40](https://github.com/n8n-io/n8n/commit/8dd7c402918d8382e9efd32ee11feed8852607b8))
* Pin node version in Docker base image ([#20634](https://github.com/n8n-io/n8n/issues/20634)) ([4d80c2e](https://github.com/n8n-io/n8n/commit/4d80c2e898831539623a9276fc49baf77e881024))
* Prevent runtime import via `__builtins__` dict in native Python runner ([#20628](https://github.com/n8n-io/n8n/issues/20628)) ([09c8559](https://github.com/n8n-io/n8n/commit/09c8559c2c9862420d5c405a21933156b879b1ed))
* **Slack Node:** Add :history scopes to support the 'history' operation in Slack node ([#20523](https://github.com/n8n-io/n8n/issues/20523)) ([88b8719](https://github.com/n8n-io/n8n/commit/88b87191e5677a417fe2ce21a335ea8f01c0d06f))
* **Supabase Node:** Fix issue with execute function was called with incorrect parameters when accessing schema if set by expression ([#20507](https://github.com/n8n-io/n8n/issues/20507)) ([b868284](https://github.com/n8n-io/n8n/commit/b868284851f1900e6154541129519048002e9fc5))
* Update libxml2 ([#20635](https://github.com/n8n-io/n8n/issues/20635)) ([2ac03d0](https://github.com/n8n-io/n8n/commit/2ac03d069133bf69cd63826024e14332fd0bc059))
* Update path.join -> safeJoinPath for compression utils ([#20461](https://github.com/n8n-io/n8n/issues/20461)) ([ad11e77](https://github.com/n8n-io/n8n/commit/ad11e77b42cd805962a2a21bf078569e986368fa))


### Features

* Add docs to `@n8n/eslint-plugin-community-nodes` ([#20266](https://github.com/n8n-io/n8n/issues/20266)) ([6cb36b5](https://github.com/n8n-io/n8n/commit/6cb36b5194ec684ab515ad4b6d78d305ace2b07e))
* Add status check for project json files in git folder ([#20369](https://github.com/n8n-io/n8n/issues/20369)) ([2f38db8](https://github.com/n8n-io/n8n/commit/2f38db86b50d0ff4b2b4cd302d69982601adb200))
* Add strict mode and cloud lint rules to @n8n/node-cli ([#20142](https://github.com/n8n-io/n8n/issues/20142)) ([b1baca5](https://github.com/n8n-io/n8n/commit/b1baca5c6c22115a5769e7a34135a30158d1499d))
* Add support for displayOptions in INodePropertyOptions ([#20184](https://github.com/n8n-io/n8n/issues/20184)) ([fd50563](https://github.com/n8n-io/n8n/commit/fd50563591a77b81677660cd9b3f7d678e6fa04f))
* **ai-builder, editor:** Flag AI builder placeholder parameters and render them on front-end ([#20494](https://github.com/n8n-io/n8n/issues/20494)) ([95d0c45](https://github.com/n8n-io/n8n/commit/95d0c45771fbc9486f7372b7658cae303f5c2329))
* **API:** Add project and projectId fields to get and update a variable project ([#20544](https://github.com/n8n-io/n8n/issues/20544)) ([5bddbed](https://github.com/n8n-io/n8n/commit/5bddbedf2eb5b6363e24e20dccfea267b80001fb))
* **core:** Telemetry for data tables storage limit reached ([#20485](https://github.com/n8n-io/n8n/issues/20485)) ([52ad94f](https://github.com/n8n-io/n8n/commit/52ad94f54cef6fb16d9cff6fb13f935b091c8ac9))
* **core:** Track package_version of community nodes ([#20428](https://github.com/n8n-io/n8n/issues/20428)) ([0da3e14](https://github.com/n8n-io/n8n/commit/0da3e14a521535f8b4c01c4be7ee00f3ba65e8ba))
* **core:** Use project variable in executions ([#20275](https://github.com/n8n-io/n8n/issues/20275)) ([ca69904](https://github.com/n8n-io/n8n/commit/ca69904ad4a4c20f6370f1ebed2c27947a14d6f3))
* Define node's waiting message in the node's description ([#20416](https://github.com/n8n-io/n8n/issues/20416)) ([d03a6c0](https://github.com/n8n-io/n8n/commit/d03a6c08e1ad3c5c5a5228b6e1d0483e1216c49c))
* **editor:** Allow expressions to autocomplete project variables ([#20269](https://github.com/n8n-io/n8n/issues/20269)) ([2a7b341](https://github.com/n8n-io/n8n/commit/2a7b34197a63133cdeef8a9d6794b1e11bc08bc2))
* **editor:** Create new variable page inside overview project page ([#20332](https://github.com/n8n-io/n8n/issues/20332)) ([cd0bbe2](https://github.com/n8n-io/n8n/commit/cd0bbe2d967fb33f212ccc71b933792e001d9a31))
* **editor:** Improve community node tracking ([#20479](https://github.com/n8n-io/n8n/issues/20479)) ([07c60b2](https://github.com/n8n-io/n8n/commit/07c60b23ce5cf2021337d697920577f6ab1948b3))
* **editor:** Introduce `Replace Node` context menu option ([#20287](https://github.com/n8n-io/n8n/issues/20287)) ([273840c](https://github.com/n8n-io/n8n/commit/273840c04216778165ca24dfaaa4176495866578))
* **Ollama Node:** Add Ollama vendor with tool support and image analysis ([#19371](https://github.com/n8n-io/n8n/issues/19371)) ([c257a8f](https://github.com/n8n-io/n8n/commit/c257a8f92233d534f8ec636ea8e017bc966a5804))
* **Redis Vector Store Node:** Redis vector store node implementation ([#19428](https://github.com/n8n-io/n8n/issues/19428)) ([f178a59](https://github.com/n8n-io/n8n/commit/f178a59702ac8803cbf01ac4cf6e0e1500b67f91))
* Roll out Lucide icons to Nodes, remove FontAwesome icons ([#20477](https://github.com/n8n-io/n8n/issues/20477)) ([596cdfe](https://github.com/n8n-io/n8n/commit/596cdfec911054d699ff4343ea99e5d373597f35))
* **Split Out Node:**  Incorrect warning fix ([#20468](https://github.com/n8n-io/n8n/issues/20468)) ([fb501d6](https://github.com/n8n-io/n8n/commit/fb501d6ded58b605e26c74499866664fdaba85b2))



# [1.115.0](https://github.com/n8n-io/n8n/compare/n8n@1.114.0...n8n@1.115.0) (2025-10-06)


### Bug Fixes

* `n8n-node` not working on Windows ([#20091](https://github.com/n8n-io/n8n/issues/20091)) ([c3fff03](https://github.com/n8n-io/n8n/commit/c3fff03945869778635d270085122fb01953d3b2))
* Add missing `test` and `authenticate` to OpenWeatherMap, Azure Storage and Netlify credentials ([#20221](https://github.com/n8n-io/n8n/issues/20221)) ([18a5924](https://github.com/n8n-io/n8n/commit/18a592499ffb26f32635a64d94c2fe737562f2ad))
* Allow creation of vector search indexes in MongoDB node ([#20235](https://github.com/n8n-io/n8n/issues/20235)) ([8df5211](https://github.com/n8n-io/n8n/commit/8df5211fa71533ad068499807c27f209a194f01b))
* **Anthropic Chat Model Node:** Fix Sonnet 4.5 not working with default topP ([#20286](https://github.com/n8n-io/n8n/issues/20286)) ([fd7b2a5](https://github.com/n8n-io/n8n/commit/fd7b2a5d45e50ca92a0029154d98bb0226ecdf99))
* **AwsS3 Node:** Return data with continueOnFail ([#19951](https://github.com/n8n-io/n8n/issues/19951)) ([ac0e7e3](https://github.com/n8n-io/n8n/commit/ac0e7e375feaf7390c65c36b8a859af93ff322ca))
* **core:** Add `globals` and `locals` to denylist in native Python runner ([#20172](https://github.com/n8n-io/n8n/issues/20172)) ([77d7408](https://github.com/n8n-io/n8n/commit/77d7408093b0b90aad99d9ef1489cd17438e7c66))
* **core:** Add cancellation reasons ([#20238](https://github.com/n8n-io/n8n/issues/20238)) ([0681e78](https://github.com/n8n-io/n8n/commit/0681e78eb3bb71633582a34fc296f89f280c9536))
* **core:** Capture stderr from task process in native Python runner ([#20180](https://github.com/n8n-io/n8n/issues/20180)) ([7af1a5c](https://github.com/n8n-io/n8n/commit/7af1a5c7b88867d12d3bd213a113a3e3c36b6003))
* **core:** Check all outputs for chat triggers, first output only for webhooks ([#20308](https://github.com/n8n-io/n8n/issues/20308)) ([412322a](https://github.com/n8n-io/n8n/commit/412322a50ea2b0599b3b450de6472c8dd44e31bb))
* **core:** Do not report to Sentry successful ws close in native Python runner ([#20257](https://github.com/n8n-io/n8n/issues/20257)) ([4ca6e4f](https://github.com/n8n-io/n8n/commit/4ca6e4f29fa7374354fd6d19321357b76ef4e484))
* **core:** Fix paired item data retrieval in loops with IF nodes ([#20309](https://github.com/n8n-io/n8n/issues/20309)) ([a9a450b](https://github.com/n8n-io/n8n/commit/a9a450b8d99fa253dc1539ad375c4c2d8df03d6e))
* **core:** Keep submodules of safe modules in native Python runner ([#20284](https://github.com/n8n-io/n8n/issues/20284)) ([7eb8a32](https://github.com/n8n-io/n8n/commit/7eb8a324508d7b61ad8a31359f86a955b50327bc))
* **core:** Make transition self-healing on `SIGTERM` ([#20243](https://github.com/n8n-io/n8n/issues/20243)) ([8fa5b57](https://github.com/n8n-io/n8n/commit/8fa5b57ccf95bed286c0589b93422c6340b58cc8))
* **core:** Prevent race condition on job processing handler registration ([#20219](https://github.com/n8n-io/n8n/issues/20219)) ([cd8926e](https://github.com/n8n-io/n8n/commit/cd8926e851079c3aa1101e160f8027671b04a843))
* **core:** Prevent resolving of raw “$” as stringified function ([#19237](https://github.com/n8n-io/n8n/issues/19237)) ([93df675](https://github.com/n8n-io/n8n/commit/93df67546453f0f7725a63f9aa7650ce4614041d))
* **core:** Show error description in tools ([#19914](https://github.com/n8n-io/n8n/issues/19914)) ([165f74b](https://github.com/n8n-io/n8n/commit/165f74b2a8069283037c6358999625ba15ff47f4))
* **core:** Support log streaming in webhook processors ([#20215](https://github.com/n8n-io/n8n/issues/20215)) ([5ca781f](https://github.com/n8n-io/n8n/commit/5ca781fc4289796683d569f43a873fd0488907d7))
* **core:** Undo backend validation for moving workflow on protected instance ([#20404](https://github.com/n8n-io/n8n/issues/20404)) ([316dafa](https://github.com/n8n-io/n8n/commit/316dafafc075a1b596b686eff0e4a8023a99ad64))
* Disable Builder if license does not have feature ([#20318](https://github.com/n8n-io/n8n/issues/20318)) ([5ad9e81](https://github.com/n8n-io/n8n/commit/5ad9e814a676bec909afef6983e5d75f5ad43c00))
* Disable Execute and Refine button if no credits remaining ([#20248](https://github.com/n8n-io/n8n/issues/20248)) ([4685009](https://github.com/n8n-io/n8n/commit/46850099407182e5e0a72311676b50d0a39996b2))
* **Discord Node:** Add test to Discord Webhook credential ([#20314](https://github.com/n8n-io/n8n/issues/20314)) ([f1a51c4](https://github.com/n8n-io/n8n/commit/f1a51c486ecc588a0114c62cd4d6b737af751c3d))
* **Discord Node:** Fix parseDiscordError to properly display Discord API errors ([#17606](https://github.com/n8n-io/n8n/issues/17606)) ([f331c5e](https://github.com/n8n-io/n8n/commit/f331c5e60015c1b0550ad098b56f5783c09539a6))
* Don't allow moving a readonly workflow ([#20227](https://github.com/n8n-io/n8n/issues/20227)) ([16e4c7e](https://github.com/n8n-io/n8n/commit/16e4c7e16e6afac60d319b1eaa9b01b4740ef8a5))
* **editor:** Add auto-scroll on drag in workflows list ([#20193](https://github.com/n8n-io/n8n/issues/20193)) ([14d0e17](https://github.com/n8n-io/n8n/commit/14d0e1788c02298443aee95a85e8166086782020))
* **editor:** Add rule to prevent undefined components (missing imports) in Vue ([#20273](https://github.com/n8n-io/n8n/issues/20273)) ([2d00ebd](https://github.com/n8n-io/n8n/commit/2d00ebd260ab3dd54fde689e9e0dd1a3ea1ae8b1))
* **editor:** Add upgrade indicators and tooltip for unlicensed project roles ([#20225](https://github.com/n8n-io/n8n/issues/20225)) ([93769f4](https://github.com/n8n-io/n8n/commit/93769f4b331b6fd4fce4418709466800e1305c1e))
* **editor:** Fix `ctrl+s` shortcut when renaming node ([#20310](https://github.com/n8n-io/n8n/issues/20310)) ([324ee62](https://github.com/n8n-io/n8n/commit/324ee620cadf6d48cc75e77426ad2b8cd50465d2))
* **editor:** Fix workflow name not resolving in node expressions preview ([#19979](https://github.com/n8n-io/n8n/issues/19979)) ([44731a9](https://github.com/n8n-io/n8n/commit/44731a98ad29e3d819b4f183b90baaced35e3b6b))
* **editor:** Frontend housekeeping ([#20292](https://github.com/n8n-io/n8n/issues/20292)) ([0bf3151](https://github.com/n8n-io/n8n/commit/0bf3151f080e1feff5d80b48cbb3b0769e24ad7a))
* **editor:** Incorrect toast when starting workflow manually via chat trigger ([#20073](https://github.com/n8n-io/n8n/issues/20073)) ([7d36648](https://github.com/n8n-io/n8n/commit/7d36648e316e83a08493049c856c9804553edb7c))
* **editor:** Show running edge with existing run data as green ([#20204](https://github.com/n8n-io/n8n/issues/20204)) ([3d30f95](https://github.com/n8n-io/n8n/commit/3d30f959c2bc9cec1b6c60ece3d71a955781c3e8))
* Fallback to cli command if http request failed in npm-utils for community packages ([#19413](https://github.com/n8n-io/n8n/issues/19413)) ([2bde2e6](https://github.com/n8n-io/n8n/commit/2bde2e66cd4c83b582db1435327cbf66e5ba9576))
* Fix font paths in design system ([#20256](https://github.com/n8n-io/n8n/issues/20256)) ([7aed600](https://github.com/n8n-io/n8n/commit/7aed600a2e15a09770eac5538138653d0f6aeed5))
* **Grist Node:** Allow filtering for numbers <= 0 ([#20045](https://github.com/n8n-io/n8n/issues/20045)) ([96d3faf](https://github.com/n8n-io/n8n/commit/96d3faf3cec5bf6f4fb275f173fbc8fd46d4e696))
* **S3 Node:** Consider LocationConstraint from GetBucketLocation optional due to many non-compliant S3 implementations ([#15432](https://github.com/n8n-io/n8n/issues/15432)) ([21abe2d](https://github.com/n8n-io/n8n/commit/21abe2d55793f60bdc274b3ed430baf335ccc655))
* **Salesforce Trigger Node:** Cleanup logic update ([#19769](https://github.com/n8n-io/n8n/issues/19769)) ([96a643e](https://github.com/n8n-io/n8n/commit/96a643edf1157f6c96aceb72c3689ad6e690ef06))
* Show Builder's Ask Admin tooltip just for owner ([#20246](https://github.com/n8n-io/n8n/issues/20246)) ([c221833](https://github.com/n8n-io/n8n/commit/c2218334146136acc3560ffe43c46cdb845358ae))
* **Spreadsheet File Node:** Use streams to read xlsx ([#19953](https://github.com/n8n-io/n8n/issues/19953)) ([ef1c079](https://github.com/n8n-io/n8n/commit/ef1c079d3e1260058ad8046ba8ffba65dc7501cd))
* Update links ([#20022](https://github.com/n8n-io/n8n/issues/20022)) ([3ad0706](https://github.com/n8n-io/n8n/commit/3ad070621f991b02fe0aac03abf38160e030b769))
* Use monospace for param preview ([#19975](https://github.com/n8n-io/n8n/issues/19975)) ([02c6a94](https://github.com/n8n-io/n8n/commit/02c6a9485c4153e7a7875cbcd0e752cb57110b4d))
* When a workflow is waiting indefinitely, it now show the correct message ([#20350](https://github.com/n8n-io/n8n/issues/20350)) ([efc2b55](https://github.com/n8n-io/n8n/commit/efc2b5589ae1f88b9f9ff494ea04347ac8612bf3))


### Features

*  Import project from json file stored in git folder ([#20294](https://github.com/n8n-io/n8n/issues/20294)) ([65942c3](https://github.com/n8n-io/n8n/commit/65942c3b7b1a643e415efcaba7b582d829623160))
* Add beta label for AI Assistant/Builder ([#20346](https://github.com/n8n-io/n8n/issues/20346)) ([57bea34](https://github.com/n8n-io/n8n/commit/57bea347f07995cd17bcb19dd126ca878b453e5b))
* **core:** Add projectId foreign key to the variable table ([#20058](https://github.com/n8n-io/n8n/issues/20058)) ([bf1b26d](https://github.com/n8n-io/n8n/commit/bf1b26d6a47a57d3f18be0fff315f73e7cb2de0e))
* **core:** Make variable update DTO fields optional for patch and add validation ([#20348](https://github.com/n8n-io/n8n/issues/20348)) ([e23bcfd](https://github.com/n8n-io/n8n/commit/e23bcfd63aac7d06afe372fda08bf1df8fe8a11b))
* **core:** Update variables API to reflect project variables ([#20187](https://github.com/n8n-io/n8n/issues/20187)) ([d5159f0](https://github.com/n8n-io/n8n/commit/d5159f04dc1cac59eb6a6aa27bc2cfb12779e2ae))
* Exclude large data tables by default, allow inclusion with override flag ([#20298](https://github.com/n8n-io/n8n/issues/20298)) ([208027b](https://github.com/n8n-io/n8n/commit/208027b17135c0fc76e21b65cded9cc2777c5476))
* Export projects as json files in source control folder ([#20196](https://github.com/n8n-io/n8n/issues/20196)) ([5c398e4](https://github.com/n8n-io/n8n/commit/5c398e4f2c2ba4d8399f11b2a734c7004c3d48ae))
* GCP secrets with no latest version no longer breaks secret sync ([#20203](https://github.com/n8n-io/n8n/issues/20203)) ([6e39a0d](https://github.com/n8n-io/n8n/commit/6e39a0d3b85f0044d9e46b989bc7a0acd8f47549))
* **Github Node:** Introduce get issues operation on user resource ([#16951](https://github.com/n8n-io/n8n/issues/16951)) ([065bbcf](https://github.com/n8n-io/n8n/commit/065bbcfdc70dfe69eb21923c23d163752cccc164))
* **Gmail Node:** Add "Recipients only" option for reply mode ([#19912](https://github.com/n8n-io/n8n/issues/19912)) ([7570922](https://github.com/n8n-io/n8n/commit/7570922d166fb9c35a69ba3ead8f77b5649fa0ab))
* Implement Agent executing tools in the engine ([#20030](https://github.com/n8n-io/n8n/issues/20030)) ([fadfb75](https://github.com/n8n-io/n8n/commit/fadfb756aefbbd53a465bacfd082092823888a3b))
* PAY-3776 / PAY-3777 add postgres export / import steps ([#20145](https://github.com/n8n-io/n8n/issues/20145)) ([0ffa4d0](https://github.com/n8n-io/n8n/commit/0ffa4d055475a32f11ffcb1471c8b699975e48b3))
* PAY-3778 add import portion to db tests ([#20141](https://github.com/n8n-io/n8n/issues/20141)) ([9360a35](https://github.com/n8n-io/n8n/commit/9360a3594963b82429b878f99bbfb96cd5aab4bf))
* PAY-3859 encrypt decrypt ([#20155](https://github.com/n8n-io/n8n/issues/20155)) ([41bf7be](https://github.com/n8n-io/n8n/commit/41bf7beba4a32d87724d1de262c22cf3e5e41043))
* Use SafePathJoin, Raw SQL queries for insertions ([#20244](https://github.com/n8n-io/n8n/issues/20244)) ([af13918](https://github.com/n8n-io/n8n/commit/af1391853b5c72ce7ea89fbe312e4c61a35bf6cd))
* User streams for compression / decompression ([#20289](https://github.com/n8n-io/n8n/issues/20289)) ([efffc75](https://github.com/n8n-io/n8n/commit/efffc7532976b32e9ca57d8978f4041cb631ebc4))


### Performance Improvements

* **editor:** Omit execution data from executionFinished event ([#20001](https://github.com/n8n-io/n8n/issues/20001)) ([723b9b8](https://github.com/n8n-io/n8n/commit/723b9b8578d9edfb892c642b547109299762ece1))



# [1.114.0](https://github.com/n8n-io/n8n/compare/n8n@1.113.0...n8n@1.114.0) (2025-09-29)


### Bug Fixes

* **ChatTrigger Node:** Chat submit button, fix disabled state coloring ([#20085](https://github.com/n8n-io/n8n/issues/20085)) ([47cbd72](https://github.com/n8n-io/n8n/commit/47cbd72834f8e30d5f509d8d42bc23a88f88ff07))
* **core:** Allow accessing nodes.json in preview mode ([#19920](https://github.com/n8n-io/n8n/issues/19920)) ([a26810b](https://github.com/n8n-io/n8n/commit/a26810b8ae45eef7d0b6ad169c311e5954d842a1))
* **core:** Batch markAsCrashed updates to avoid oversized queries ([#19904](https://github.com/n8n-io/n8n/issues/19904)) ([2db47fd](https://github.com/n8n-io/n8n/commit/2db47fd8c4dc0e083efcd52430180dca5268929c))
* **core:** Ensure cancellation interrupts runner tasks in worker ([#19864](https://github.com/n8n-io/n8n/issues/19864)) ([fac005b](https://github.com/n8n-io/n8n/commit/fac005b1654530f7162d448ba7bde00b50a22392))
* **core:** Fix PKCE OAuth2 flows to work without client secret ([#19601](https://github.com/n8n-io/n8n/issues/19601)) ([199d919](https://github.com/n8n-io/n8n/commit/199d919df149e4aae871987d6957242c95607b04))
* **core:** Iterate over all main output branches when extracting response ([#19963](https://github.com/n8n-io/n8n/issues/19963)) ([0b7db24](https://github.com/n8n-io/n8n/commit/0b7db24070ae4da35b1b0ebf9dc687ee9319dc6d))
* **core:** Only print deprecation notices on start command ([#19987](https://github.com/n8n-io/n8n/issues/19987)) ([4d024ec](https://github.com/n8n-io/n8n/commit/4d024ecb9d1d3806e2d8d0eeed230ebfa3ffde76))
* **core:** Preserve sourceOverwrite in pairedItem data during workflow execution ([#20064](https://github.com/n8n-io/n8n/issues/20064)) ([7de2edd](https://github.com/n8n-io/n8n/commit/7de2eddc8ae960bd80ebaa5e91eaa47a1b278423))
* **core:** Remove Data Table experimental warning log ([#19978](https://github.com/n8n-io/n8n/issues/19978)) ([7273d41](https://github.com/n8n-io/n8n/commit/7273d4150018ee3c76f76146819fca3268fc20c8))
* **core:** Surface workflow config errors to the webhook caller  ([#19858](https://github.com/n8n-io/n8n/issues/19858)) ([8327257](https://github.com/n8n-io/n8n/commit/83272570e4b9175c5cbe73d784805a3563485ec2))
* **core:** Use different query to get sqlite data table sizes ([#19878](https://github.com/n8n-io/n8n/issues/19878)) ([24f08e1](https://github.com/n8n-io/n8n/commit/24f08e12f087c55aae4ace6e5c17fbc735ac4c04))
* **editor:** Adjust insight's project filter placeholder ([#19909](https://github.com/n8n-io/n8n/issues/19909)) ([4c0e19f](https://github.com/n8n-io/n8n/commit/4c0e19f637821ac4f2a734c74f7e593ee7951694))
* **editor:** Clean up NDV RunData loading states ([#20082](https://github.com/n8n-io/n8n/issues/20082)) ([874c890](https://github.com/n8n-io/n8n/commit/874c89085b2ff96ef2426181f044f585271d9fd7))
* **editor:** Fix data tables id column sort icon ([#19981](https://github.com/n8n-io/n8n/issues/19981)) ([0475599](https://github.com/n8n-io/n8n/commit/04755999576713150b981cf93d836fa42d4587c1))
* **editor:** Fix empty credential translation ([#20019](https://github.com/n8n-io/n8n/issues/20019)) ([fa66401](https://github.com/n8n-io/n8n/commit/fa664010f169a643eb2d46134cab017f24f7f326))
* **editor:** Fix keyboard navigation in node creator with pre-built agents experiment ([#19853](https://github.com/n8n-io/n8n/issues/19853)) ([a56d6ab](https://github.com/n8n-io/n8n/commit/a56d6ab94627902441f86046c60756c464589764))
* **editor:** Fix reka popover issue when uncontrolled ([#19952](https://github.com/n8n-io/n8n/issues/19952)) ([36df7da](https://github.com/n8n-io/n8n/commit/36df7dada28923409458743b29a37869c93ba93f))
* **editor:** Fix rlc input selection issue when not in list mode ([#20004](https://github.com/n8n-io/n8n/issues/20004)) ([c6443c3](https://github.com/n8n-io/n8n/commit/c6443c39dad2f08251492ea969e7de9f02df8eb7))
* **editor:** Fix UI being blocked from loading while data table limits are being fetched ([#19871](https://github.com/n8n-io/n8n/issues/19871)) ([436c5ab](https://github.com/n8n-io/n8n/commit/436c5abd830732cf12cb5fd5269529c089b7daad))
* **editor:** Improve arrow key navigation in chat message panel ([#19926](https://github.com/n8n-io/n8n/issues/19926)) ([0f19655](https://github.com/n8n-io/n8n/commit/0f19655f95bda214d80aa168788b6923dc50c32e))
* **editor:** Make shortcuts for toggling input/output panel work in the popped out log view ([#19911](https://github.com/n8n-io/n8n/issues/19911)) ([8049da2](https://github.com/n8n-io/n8n/commit/8049da2971978bfffbe2f2151b2aa115e86623c5))
* **editor:** Make the data table size cache longer by default ([#19875](https://github.com/n8n-io/n8n/issues/19875)) ([71cf584](https://github.com/n8n-io/n8n/commit/71cf58473b0a60f0a65b006a39fce551f39c118f))
* **editor:** Mark Workflow Extraction Modal Submit Button as loading and show error toast on error  ([#19976](https://github.com/n8n-io/n8n/issues/19976)) ([60560ba](https://github.com/n8n-io/n8n/commit/60560ba6d605b00a0c3a6fe60c7852fe62535f2d))
* **editor:** Reflect Wait node's execution status correctly in log view ([#19898](https://github.com/n8n-io/n8n/issues/19898)) ([a679359](https://github.com/n8n-io/n8n/commit/a6793593b93496f2bee1a43b158ea628983fd5bc))
* **Gmail Trigger Node:** Show warning about multiple items returned ([#19896](https://github.com/n8n-io/n8n/issues/19896)) ([83173fb](https://github.com/n8n-io/n8n/commit/83173fb04ccb59029774c56f092e05bbcccc3199))
* **MCP Client Tool Node:** Change default transport to HTTP Streamable ([#20053](https://github.com/n8n-io/n8n/issues/20053)) ([e0a9de7](https://github.com/n8n-io/n8n/commit/e0a9de7fe3ef1cca52d602d3de030803cb94a29d))
* **Microsoft Excel 365 Node:** Allow appending to empty sheets ([#19642](https://github.com/n8n-io/n8n/issues/19642)) ([c96e6ae](https://github.com/n8n-io/n8n/commit/c96e6aef21e41939bbf7b770f3039d98fcfaf685))
* Only show AI assistant when AI service URL is setup ([#18774](https://github.com/n8n-io/n8n/issues/18774)) ([002f380](https://github.com/n8n-io/n8n/commit/002f380934e5c4b1e6b9b2ef9276bebaa1dda216))
* **OpenAI Node:** Missing header for assistant API calls ([#20060](https://github.com/n8n-io/n8n/issues/20060)) ([a6c7e39](https://github.com/n8n-io/n8n/commit/a6c7e39cb8cd82c3d03af984bdb52a2541140038))
* Pass project ID to the wf execution demo iframe ([#19785](https://github.com/n8n-io/n8n/issues/19785)) ([a0efb97](https://github.com/n8n-io/n8n/commit/a0efb97904d5b9bb3ba70357bc40603d670fa942))
* **Postgres Node:** Fix citext and user defined field type mapping ([#19780](https://github.com/n8n-io/n8n/issues/19780)) ([669a7b5](https://github.com/n8n-io/n8n/commit/669a7b5a9d76f2d3056b7c1ba8ed1a69bd23b1f7))
* **Slack Node:** Reply to message ([#19760](https://github.com/n8n-io/n8n/issues/19760)) ([977d37f](https://github.com/n8n-io/n8n/commit/977d37f6588d4ce884495d1248e8816124a803ad))
* **WhatsApp Business Cloud Node:** Include whatsapp id in contact properties ([#19762](https://github.com/n8n-io/n8n/issues/19762)) ([ea9093c](https://github.com/n8n-io/n8n/commit/ea9093c39c4708929fc860440548a687ff353e9d))
* **Wordpress Node:** Handle `before` query parameter when getting many posts or pages ([#20041](https://github.com/n8n-io/n8n/issues/20041)) ([3963e97](https://github.com/n8n-io/n8n/commit/3963e97c1f8774ee0bb516b2b07288a3f81f199b))


### Features

* Add community node ESLint plugin, use in scanner ([#19660](https://github.com/n8n-io/n8n/issues/19660)) ([b55c95c](https://github.com/n8n-io/n8n/commit/b55c95c863bad90df16fa708b90b9e00a5e64afa))
* Binary data access improvements ([#19629](https://github.com/n8n-io/n8n/issues/19629)) ([182a40e](https://github.com/n8n-io/n8n/commit/182a40e10482988271b388fc399b04dc91767c61))
* **core:** Add custom data range query to insights endpoints ([#20009](https://github.com/n8n-io/n8n/issues/20009)) ([24ea97a](https://github.com/n8n-io/n8n/commit/24ea97a77f6f99807c55153bc294bef8754feab7))
* **core:** Add HTTPS protocol support for environments ([#19482](https://github.com/n8n-io/n8n/issues/19482)) ([9806e6f](https://github.com/n8n-io/n8n/commit/9806e6fc7203ac606e03a0adcf77931399d3ec55))
* **core:** Add startDate and endDate filter query to insights endpoints ([#19954](https://github.com/n8n-io/n8n/issues/19954)) ([7c3e1c9](https://github.com/n8n-io/n8n/commit/7c3e1c9e01606d4dcae2c17dcdde308609c2d021))
* **core:** Adjust n8n email template styling ([#19969](https://github.com/n8n-io/n8n/issues/19969)) ([dbf3284](https://github.com/n8n-io/n8n/commit/dbf328452cca0d4591aae1521f93fec0a1fead85))
* **core:** Throw customized error on assigned custom role deletion ([#19900](https://github.com/n8n-io/n8n/issues/19900)) ([a01e5a5](https://github.com/n8n-io/n8n/commit/a01e5a5bc21979144f7e0a299006556db9817aaf))
* **editor:** Add keyboard shortcut for run data search in the log view and mapper popover ([#19745](https://github.com/n8n-io/n8n/issues/19745)) ([1ca9bbe](https://github.com/n8n-io/n8n/commit/1ca9bbed68c35c1ad68590fd027533692090eadc))
* **editor:** Show node update button in ndv and nodecreator ([#19696](https://github.com/n8n-io/n8n/issues/19696)) ([ef5ec8a](https://github.com/n8n-io/n8n/commit/ef5ec8a6882d6e3590c2dded9d9024dc62e53bac))
* Make project member updates immediate ([#19837](https://github.com/n8n-io/n8n/issues/19837)) ([b59f976](https://github.com/n8n-io/n8n/commit/b59f97631da06dfd825ea7b44718e132421bc399))
* PAY-3774 entities import logic ([#19770](https://github.com/n8n-io/n8n/issues/19770)) ([560c951](https://github.com/n8n-io/n8n/commit/560c95126a78ed1ecf4d3205167d0e5214f5dd79))
* PAY-3775 disable ref to use master ([#20086](https://github.com/n8n-io/n8n/issues/20086)) ([03d351a](https://github.com/n8n-io/n8n/commit/03d351a29063fa79ae1bcf4c40d2a10835352a3c))
* PAY-3775 github action to test exporting to sqlite ([#20069](https://github.com/n8n-io/n8n/issues/20069)) ([0e9464a](https://github.com/n8n-io/n8n/commit/0e9464a32c96b0ad84ec8cf7430dcff6c71fc1ec))
* PAY-3855 ensure latest migrations run ([#19917](https://github.com/n8n-io/n8n/issues/19917)) ([2160c55](https://github.com/n8n-io/n8n/commit/2160c550f93ae2f9fbfbb6fe6b457deff735d397))


### Performance Improvements

* **editor:** Skip calculating log tree entirely when the panel is closed ([#19870](https://github.com/n8n-io/n8n/issues/19870)) ([677cdda](https://github.com/n8n-io/n8n/commit/677cddab31e882792a7053f9bc2c3d685cb9ed66))



# [1.113.0](https://github.com/n8n-io/n8n/compare/n8n@1.112.0...n8n@1.113.0) (2025-09-22)


### Bug Fixes

* Add accurate concurrent executions count to executions list ([#19249](https://github.com/n8n-io/n8n/issues/19249)) ([dc75be3](https://github.com/n8n-io/n8n/commit/dc75be3a6fa333a24d01073df5c0d724681d53af))
* **AI Agent Node:** Ignore non-text chunks ([#19568](https://github.com/n8n-io/n8n/issues/19568)) ([ccee1ac](https://github.com/n8n-io/n8n/commit/ccee1acf0592ffccf342cdb7cc4b37e8055c2e36))
* **AI Agent Node:** Respect context window length in streaming mode ([#19567](https://github.com/n8n-io/n8n/issues/19567)) ([6b25c57](https://github.com/n8n-io/n8n/commit/6b25c570ed27eaed1da0c5678ea86094704b687b))
* Always generate tags.json file when using environments ([#19698](https://github.com/n8n-io/n8n/issues/19698)) ([dee2216](https://github.com/n8n-io/n8n/commit/dee22162f400731d2d76f47bac6cad174ee6b3f3))
* **API:** Fix broken Terms of Service link in Swagger documentation ([#19216](https://github.com/n8n-io/n8n/issues/19216)) ([2a59418](https://github.com/n8n-io/n8n/commit/2a5941856fe568098bff73b4e1d3a5044627e9c6))
* **AWS Textract Node:** Handle all binary data modes correctly ([#19258](https://github.com/n8n-io/n8n/issues/19258)) ([64fa0ce](https://github.com/n8n-io/n8n/commit/64fa0ceea62288bbe76fe378e9c77197d5defab4))
* **core:** Credential export for personal projects ([#19720](https://github.com/n8n-io/n8n/issues/19720)) ([feebfd2](https://github.com/n8n-io/n8n/commit/feebfd2f79aafbc96e12768439ab0889813701db))
* **core:** Don't show license activation error message twice ([#19833](https://github.com/n8n-io/n8n/issues/19833)) ([9b96149](https://github.com/n8n-io/n8n/commit/9b96149cafaaac4861e75584ef332dd688b63b94))
* **core:** Ensure external secrets are refreshed at job start with error logging ([#19539](https://github.com/n8n-io/n8n/issues/19539)) ([53630d7](https://github.com/n8n-io/n8n/commit/53630d7a2eafc7c0be0ebf4db96247732ec737b9))
* Disable update button when the user is not allowed to update ([#19223](https://github.com/n8n-io/n8n/issues/19223)) ([dfb0c4e](https://github.com/n8n-io/n8n/commit/dfb0c4e77a169963cf2a0ffafc59ba7285b5eab3))
* **editor:** Canvas connections show `X items total` label when multiple run iterations ([#19648](https://github.com/n8n-io/n8n/issues/19648)) ([61edb72](https://github.com/n8n-io/n8n/commit/61edb7237949a6d9d162c574f0a3874e24bf3af1))
* **editor:** Fix position of notification toast and "Ask AI" floating button ([#19694](https://github.com/n8n-io/n8n/issues/19694)) ([80e08db](https://github.com/n8n-io/n8n/commit/80e08db911ab9141b578376d00c13441d8d2d27d))
* **editor:** Keep chat session when switching to other tabs ([#19483](https://github.com/n8n-io/n8n/issues/19483)) ([7e63e56](https://github.com/n8n-io/n8n/commit/7e63e56ccd0628563b73836ad3197eed13f19da9))
* **editor:** Make project member role selection dropdown scrollable ([#19772](https://github.com/n8n-io/n8n/issues/19772)) ([3fbe08e](https://github.com/n8n-io/n8n/commit/3fbe08ed57cfd0e5cc972c83b69ffe39e12f297f))
* **editor:** Reintroduce user deletion actions in the members table in Users and Project settings page ([#19604](https://github.com/n8n-io/n8n/issues/19604)) ([bcedf5c](https://github.com/n8n-io/n8n/commit/bcedf5c76f669b424b2d124dd658c29e99da9174))
* **editor:** Unify data type icons ([#19545](https://github.com/n8n-io/n8n/issues/19545)) ([2caf23d](https://github.com/n8n-io/n8n/commit/2caf23dd8226d85aa2d2a41d6d8a2c907416625a))
* **Gemini Vertex Node:** Upgrading Langchain/google-vertexai to allow errors to bubble up correctly ([#19639](https://github.com/n8n-io/n8n/issues/19639)) ([3f1e764](https://github.com/n8n-io/n8n/commit/3f1e764c524198ddc298a67a763501c5eb85db5b))
* **Github Node:** Modify regex validation to support custom urls ([#19076](https://github.com/n8n-io/n8n/issues/19076)) ([3537a73](https://github.com/n8n-io/n8n/commit/3537a734f39f0dca4871bf5dfaa4f2344ec7595d))
* **Google Gemini Node:** Use streams when uploading file ([#19537](https://github.com/n8n-io/n8n/issues/19537)) ([82e707c](https://github.com/n8n-io/n8n/commit/82e707cdd7b05b9a719cd5fe86ab71aeb39d4b30))
* **Google Sheets Node:** Add a warning about using expressions ([#19840](https://github.com/n8n-io/n8n/issues/19840)) ([6a0aac2](https://github.com/n8n-io/n8n/commit/6a0aac21e9eb718726cc128bdc356b1689e914d3))
* Improve Node CLI error messages and dev command exit behavior ([#19637](https://github.com/n8n-io/n8n/issues/19637)) ([14a7c36](https://github.com/n8n-io/n8n/commit/14a7c36673ed3a0da46ed62e949270b818882468))
* **n8n Form Node:** Add html table tags to allowedTags, CSP headers on form completion, free text sanitization removed ([#19446](https://github.com/n8n-io/n8n/issues/19446)) ([7ea920d](https://github.com/n8n-io/n8n/commit/7ea920dbe742c0ca7c79c9df749aa7d7c898c571))
* **Notion Node:** Fix regex for getMany operation ([#19419](https://github.com/n8n-io/n8n/issues/19419)) ([185fc41](https://github.com/n8n-io/n8n/commit/185fc41ca940c5216b6ae8f8ba96325cf34a0ce4))
* Open form popup for Form Trigger even if it has execution data ([#19416](https://github.com/n8n-io/n8n/issues/19416)) ([1c45d8b](https://github.com/n8n-io/n8n/commit/1c45d8ba2e3a578f1daddc961f6e319f6a866fd0))
* **Salesforce Node:** Login prompt in Oauth2 credentials for authUrl ([#19450](https://github.com/n8n-io/n8n/issues/19450)) ([5591fdc](https://github.com/n8n-io/n8n/commit/5591fdc42b1df5e83f28a3f1a51932c7174b0f4f))
* **Salesforce Trigger Node:** Update polling logic to account for Salesforce processing delay ([#19377](https://github.com/n8n-io/n8n/issues/19377)) ([b480f49](https://github.com/n8n-io/n8n/commit/b480f495d96fd170f0b8efdc59511e4ea6834368))
* String columns do not need comparable conditions ([#19565](https://github.com/n8n-io/n8n/issues/19565)) ([a400716](https://github.com/n8n-io/n8n/commit/a400716d37e7f26a6dc693423eb9d7004cafe6ae))
* **webhook Node:** More informative error for webhook response config mismatch ([#19693](https://github.com/n8n-io/n8n/issues/19693)) ([354bcf4](https://github.com/n8n-io/n8n/commit/354bcf44b1fdf83f00b80ee15170ecca801f04e5))
* **Webhook Trigger Node:** Duplicate webhook paths are not detected for methods other than GET ([#19378](https://github.com/n8n-io/n8n/issues/19378)) ([3a38b32](https://github.com/n8n-io/n8n/commit/3a38b3286713708caaad3eb9729efb8328f8b707))


### Features

* Add a GH action to create a patch release branch ([#19477](https://github.com/n8n-io/n8n/issues/19477)) ([ddab467](https://github.com/n8n-io/n8n/commit/ddab467448e9e7fab20b0b9b4be35094caffdd66))
* Add N8N_GIT_NODE_DISABLE_BARE_REPOS environment variable to allow users to disable bare repositories in Git Node ([#19559](https://github.com/n8n-io/n8n/issues/19559)) ([5bf3db5](https://github.com/n8n-io/n8n/commit/5bf3db5ba84d3195bbe11bbd3c62f7086e090997))
* Allow filtering insight by projectId ([#19552](https://github.com/n8n-io/n8n/issues/19552)) ([8086a21](https://github.com/n8n-io/n8n/commit/8086a21eb2b2bb6a66f9d4df0c54dd4abf7f2aed))
* **core:** Implement request-response logic in workflow execution engine ([#19193](https://github.com/n8n-io/n8n/issues/19193)) ([d1b17d9](https://github.com/n8n-io/n8n/commit/d1b17d908b22564ea1c2a17dc4f1c7d0696babaa))
* **core:** Prompt user to confirm password when changing email and mfa is disabled ([#19408](https://github.com/n8n-io/n8n/issues/19408)) ([f0388aa](https://github.com/n8n-io/n8n/commit/f0388aae7e2ec64d83e9e65e0604b711f86d906e))
* **editor:** [Insights] Add filter by project ([#19643](https://github.com/n8n-io/n8n/issues/19643)) ([5cef76a](https://github.com/n8n-io/n8n/commit/5cef76ae57b2f35781c842f95575cdaf946ea3a7))
* **editor:** Add create new button in resource locator for data table node ([#19788](https://github.com/n8n-io/n8n/issues/19788)) ([0c82007](https://github.com/n8n-io/n8n/commit/0c8200736087a700e65e32eab96a2dff8eadf630))
* **editor:** Add node popularity scores to improve search ranking ([#19561](https://github.com/n8n-io/n8n/issues/19561)) ([ae1af11](https://github.com/n8n-io/n8n/commit/ae1af1101bf8fd34ee71d6f450eaf4c3f63aa914))
* **editor:** Change default sidebar state to collapsed ([#19692](https://github.com/n8n-io/n8n/issues/19692)) ([5e5d342](https://github.com/n8n-io/n8n/commit/5e5d342752e720f8fbe6e962e56327ed1d47acb5))
* **editor:** UI Data table filters ([#19596](https://github.com/n8n-io/n8n/issues/19596)) ([4c59c3b](https://github.com/n8n-io/n8n/commit/4c59c3bb8b7bf673ba2620f33a770f5de7b07b71))
* Enabling data tables as a default module ([#19687](https://github.com/n8n-io/n8n/issues/19687)) ([948d449](https://github.com/n8n-io/n8n/commit/948d4492ece1ae07ab103f36375f8615720e67e8))
* **Evaluation Node:** Add support for Data Tables as evaluations data source ([#19700](https://github.com/n8n-io/n8n/issues/19700)) ([323180e](https://github.com/n8n-io/n8n/commit/323180ea615a241526e32e7b0e7f95ea829872a3))
* **Git Node:** Add support for branches ([#18870](https://github.com/n8n-io/n8n/issues/18870)) ([7522607](https://github.com/n8n-io/n8n/commit/752260784c299ec8fab4aba69468227d2eea78a5))
* PAY-3769 add db export command ([#19579](https://github.com/n8n-io/n8n/issues/19579)) ([2435b94](https://github.com/n8n-io/n8n/commit/2435b94c2ac2ff0f0791fbf91f60c4582027d05a))
* PAY-3770 add db import command ([#19584](https://github.com/n8n-io/n8n/issues/19584)) ([cf4a551](https://github.com/n8n-io/n8n/commit/cf4a5511b62c78e8854c21d8fda16a124e7b5052))
* PAY-3773 export entities tooling ([#19658](https://github.com/n8n-io/n8n/issues/19658)) ([652f267](https://github.com/n8n-io/n8n/commit/652f267c6b6da05974d7098b44df6f6d49f7bcff))
* Support thinking settings for Gemini models ([#19591](https://github.com/n8n-io/n8n/issues/19591)) ([bb0cd86](https://github.com/n8n-io/n8n/commit/bb0cd86b28fe5c9e8602716701aef25df637c2a6))



# [1.112.0](https://github.com/n8n-io/n8n/compare/n8n@1.111.0...n8n@1.112.0) (2025-09-15)


### Bug Fixes

* ** Switch Node:** Disable expressions for Number of Outputs in v3.3 ([#19075](https://github.com/n8n-io/n8n/issues/19075)) ([f37e9da](https://github.com/n8n-io/n8n/commit/f37e9da13aaebb26265899b2c7bf4cb294c8d8d0))
* **AI Agent Node:** Fix double wrapping issue in ToolsAgent output parsing ([#19376](https://github.com/n8n-io/n8n/issues/19376)) ([df31868](https://github.com/n8n-io/n8n/commit/df31868da5e81443a66d0352f29b1ae8d3f502f4))
* **Code Tool Node:** Fix `console.log` output not being logged on browser ([#19422](https://github.com/n8n-io/n8n/issues/19422)) ([1e2f421](https://github.com/n8n-io/n8n/commit/1e2f4217e06e3924c776cb1c9bcae54b2c3bef2c))
* **core:** Add support for .cn Amazon regions ([#19363](https://github.com/n8n-io/n8n/issues/19363)) ([fea0a62](https://github.com/n8n-io/n8n/commit/fea0a62f8ec3e4b8c56cd78bbfd8c1a8924b22b2))
* **core:** Fix crashed execution recovery in scaling mode ([#19412](https://github.com/n8n-io/n8n/issues/19412)) ([3576443](https://github.com/n8n-io/n8n/commit/3576443a01f7e1102e33c48a5004a098b670ea50))
* **core:** Force synchronize tag mappings also when no tag was updated ([#19332](https://github.com/n8n-io/n8n/issues/19332)) ([e054fc7](https://github.com/n8n-io/n8n/commit/e054fc71cd272714fc81920e8d21fbbd77e98085))
* **core:** Improve Websocket connection setup for custom headers ([#19242](https://github.com/n8n-io/n8n/issues/19242)) ([1e00a7c](https://github.com/n8n-io/n8n/commit/1e00a7c788a46462b6f21c80165a4621327fba21))
* **core:** Skip canceled executions in unfinished execution recovery ([#19452](https://github.com/n8n-io/n8n/issues/19452)) ([b388b23](https://github.com/n8n-io/n8n/commit/b388b230c99063dab7691b98d5f3a220fef1ba29))
* **core:** Wrap Data Table insert, update, upsert  in transactions ([#19333](https://github.com/n8n-io/n8n/issues/19333)) ([9509ef3](https://github.com/n8n-io/n8n/commit/9509ef3e79faeda03b94c2f1cce79459f612a7ce))
* **Default Data Loader Node:** Use text loader for text/markdown mime-types ([#19549](https://github.com/n8n-io/n8n/issues/19549)) ([2b0203e](https://github.com/n8n-io/n8n/commit/2b0203ef54b46b8322f9a84182607f1c911c7a62))
* **editor:** Add debounce to text parameter input ([#19339](https://github.com/n8n-io/n8n/issues/19339)) ([18cccb2](https://github.com/n8n-io/n8n/commit/18cccb29ea3e8e5db812dea689652a49f794ebc8))
* **editor:** Don't show archived only hint at empty folders ([#19538](https://github.com/n8n-io/n8n/issues/19538)) ([c0d5d77](https://github.com/n8n-io/n8n/commit/c0d5d777cafe59991d9e46f595ddd32a59ca1352))
* **editor:** Fix highlighting in SQL editor ([#19291](https://github.com/n8n-io/n8n/issues/19291)) ([03b865d](https://github.com/n8n-io/n8n/commit/03b865d4db0faaa28c02caa7fb63df7cb31dc53f))
* **editor:** Focus on selection when clicking 'tidy up' ([#19303](https://github.com/n8n-io/n8n/issues/19303)) ([3ee827c](https://github.com/n8n-io/n8n/commit/3ee827c7a52344fda45d307383feb15a48e77e8f))
* **editor:** Handle lots of text better in chat input ([#19381](https://github.com/n8n-io/n8n/issues/19381)) ([45e8209](https://github.com/n8n-io/n8n/commit/45e8209142ee4317c7af0e5a7e96f9cd256ea9de))
* **editor:** Improve datetime handling in Data table UI ([#19425](https://github.com/n8n-io/n8n/issues/19425)) ([1853faf](https://github.com/n8n-io/n8n/commit/1853faf0322b78ad0cd9d65659d96068c6e9cd6c))
* **editor:** Input loses focus after typing to a fixed collection parameter ([#19372](https://github.com/n8n-io/n8n/issues/19372)) ([815ecfe](https://github.com/n8n-io/n8n/commit/815ecfe68087095ed95e5da2046f2856ee87eeaf))
* **editor:** Make inputs dragged to Python Code editor produce working code ([#19415](https://github.com/n8n-io/n8n/issues/19415)) ([c5ee969](https://github.com/n8n-io/n8n/commit/c5ee969433591ea82ce1d03902ada516a5b70b81))
* **editor:** Make JSON highlight color different from background on light theme ([#19543](https://github.com/n8n-io/n8n/issues/19543)) ([e589cde](https://github.com/n8n-io/n8n/commit/e589cde9c3cd7f25b1d89dd818103699923d2d11))
* **editor:** Only show previous nodes for tools in input panel ([#19335](https://github.com/n8n-io/n8n/issues/19335)) ([bd8dfc0](https://github.com/n8n-io/n8n/commit/bd8dfc074bafda41b9166074f2199342fb495c37))
* **editor:** Optimize workflow selector search performance by implementing pagination ([#19252](https://github.com/n8n-io/n8n/issues/19252)) ([8f60b52](https://github.com/n8n-io/n8n/commit/8f60b52533878a8c43b1985243787ae8f8e7a0f5))
* **editor:** Prevent tooltip flickering when a trigger node is pinned ([#19233](https://github.com/n8n-io/n8n/issues/19233)) ([18d91b6](https://github.com/n8n-io/n8n/commit/18d91b614b4f7d7e386c08df6b6a618f77e37f2b))
* **editor:** Show claim free ai credits modal on credentials ([#19241](https://github.com/n8n-io/n8n/issues/19241)) ([cf356e7](https://github.com/n8n-io/n8n/commit/cf356e77b3aaf0502ac26430e08d4e7cbb4cfe5d))
* **editor:** Show correct options in the NDV runs selector ([#19297](https://github.com/n8n-io/n8n/issues/19297)) ([bae6e3b](https://github.com/n8n-io/n8n/commit/bae6e3b12b74cafc26992bc0a7f960062f6449f9))
* **Execute Workflow Node:** Fix 'Continue (using error output)' mode to output errors correctly ([#19240](https://github.com/n8n-io/n8n/issues/19240)) ([6ed39e8](https://github.com/n8n-io/n8n/commit/6ed39e8c1c5723ebc3097db6a8f3795c1c2e0549))
* **Gmail Trigger Node:** Handle self-sent emails in inbox ([#19351](https://github.com/n8n-io/n8n/issues/19351)) ([47f1d14](https://github.com/n8n-io/n8n/commit/47f1d14b66b94ee9d0713a60e8837eef35fb56e1))
* Override axios to 1.12.0 ([#19544](https://github.com/n8n-io/n8n/issues/19544)) ([796e44e](https://github.com/n8n-io/n8n/commit/796e44eace9830f183f165195cee384e2b4d3593))
* **Perplexity Node:** Update model from 'r1-1776' to 'sonar' in API and tests ([#19440](https://github.com/n8n-io/n8n/issues/19440)) ([2ed4078](https://github.com/n8n-io/n8n/commit/2ed407850ab11b84a6ed6af6beaf4f00bc771843))
* **Set Node:** Handle special replacement patterns in JSON expressions ([#18162](https://github.com/n8n-io/n8n/issues/18162)) ([2514301](https://github.com/n8n-io/n8n/commit/2514301abdd64b86ed4f9f1cf6048b7e6c2506b8))
* Show correct "canceled" node status for chat model nodes ([#19366](https://github.com/n8n-io/n8n/issues/19366)) ([b6abd1e](https://github.com/n8n-io/n8n/commit/b6abd1ef69454fd6413224656f75cda29eae5d8f))
* **Slack Node:** Add 'search:read' scope to Slack OAuth2 credentials to support searching messages ([#19229](https://github.com/n8n-io/n8n/issues/19229)) ([a139611](https://github.com/n8n-io/n8n/commit/a13961179fd98f149ffe37e3b85979ee3a316cf7))
* **Telegram Node:** Use parameter index instead of 0 for binaryData ([#19236](https://github.com/n8n-io/n8n/issues/19236)) ([38a6140](https://github.com/n8n-io/n8n/commit/38a6140e794c5ba7b42d2b0f434a5e4c9b77eb54))
* Upgrade Langchain dependencies to address LiteLLM issue and Gemma Models not supporting images ([#19299](https://github.com/n8n-io/n8n/issues/19299)) ([e87344d](https://github.com/n8n-io/n8n/commit/e87344d97dc941f49e22878b1146cc3df28f4da8))


### Features

* **API:** Add running status query on the executions public api endpoint ([#19205](https://github.com/n8n-io/n8n/issues/19205)) ([3af4541](https://github.com/n8n-io/n8n/commit/3af45413917985d68dea5b4f6c4becfec59c92c6))
* **core:** Add HTTPS protocol support for repository connections ([#18250](https://github.com/n8n-io/n8n/issues/18250)) ([5c6094d](https://github.com/n8n-io/n8n/commit/5c6094dfd7ac012133cb6540929f2b962523f458))
* **core:** Add retry execution endpoint to public api ([#19132](https://github.com/n8n-io/n8n/issues/19132)) ([c4f41bb](https://github.com/n8n-io/n8n/commit/c4f41bb534dcc1b05a86a556e16ef463efcf8f71))
* **editor:** Add toggle viewport sync to workflow diffs & UI improvements ([#19373](https://github.com/n8n-io/n8n/issues/19373)) ([d7b8474](https://github.com/n8n-io/n8n/commit/d7b84747f8327bdbb659dd702bc1ee7569aceec0))
* **editor:** Enhance diffs formatting for jsCode and sticky notes ([#19289](https://github.com/n8n-io/n8n/issues/19289)) ([6cd1dbd](https://github.com/n8n-io/n8n/commit/6cd1dbd109dbdc647434a1e1b9c02a974dbb672b))
* **editor:** Separate node execution and validation error states ([#19029](https://github.com/n8n-io/n8n/issues/19029)) ([477dd27](https://github.com/n8n-io/n8n/commit/477dd27b086150fa75fe43dffc3de545c8fabdd9))
* **Gemini Node:** Edit Image Using Nano Banana ([#19105](https://github.com/n8n-io/n8n/issues/19105)) ([87d79c9](https://github.com/n8n-io/n8n/commit/87d79c9efb52c15cc6f1675328a3d4e0ef5d22a1))
* **OpenAI Node:** Support custom headers for model requests ([#17835](https://github.com/n8n-io/n8n/issues/17835)) ([0b4de85](https://github.com/n8n-io/n8n/commit/0b4de85a08bf5a8de3734b62e6954da244a116b9))
* **Redis Node:** Add option to disable TLS verification in Redis node ([#19143](https://github.com/n8n-io/n8n/issues/19143)) ([52d44c2](https://github.com/n8n-io/n8n/commit/52d44c26db74064c42ad40c28a7928ee906957b4))



# [1.111.0](https://github.com/n8n-io/n8n/compare/n8n@1.110.0...n8n@1.111.0) (2025-09-08)


### Bug Fixes

* Add folder scopes to global owner and admin roles ([#19230](https://github.com/n8n-io/n8n/issues/19230)) ([2113532](https://github.com/n8n-io/n8n/commit/2113532946d32b1e6c842c68524e06e5d3daebd0))
* **AMQP Trigger Node:** Update rhea library, tweak reconnection options ([#18980](https://github.com/n8n-io/n8n/issues/18980)) ([efc3a2d](https://github.com/n8n-io/n8n/commit/efc3a2d66484a14338cb67aa1135e71d25fb5c4e))
* **API:** Fix public api workflow openApi examples ([#19170](https://github.com/n8n-io/n8n/issues/19170)) ([e822cf5](https://github.com/n8n-io/n8n/commit/e822cf58d0d1307b737a7e03020bc35c70c690d6))
* **Basic LLM Chain Node:** Remove fallback connection on lower versions ([#19053](https://github.com/n8n-io/n8n/issues/19053)) ([583dd48](https://github.com/n8n-io/n8n/commit/583dd48d8a9af6534ada24619ceaf294b85208f9))
* Changes in tooltip message on data table columns ([#19172](https://github.com/n8n-io/n8n/issues/19172)) ([56fee52](https://github.com/n8n-io/n8n/commit/56fee521f5754cbf8613c00d51efb3bb58c70437))
* **core:** AI agent node data accessibility ([#18757](https://github.com/n8n-io/n8n/issues/18757)) ([f0e9221](https://github.com/n8n-io/n8n/commit/f0e9221cb3faa95b5a774caeaad672d8b9663e10))
* **core:** Ensure getNodeOutputs always returns an array ([#19069](https://github.com/n8n-io/n8n/issues/19069)) ([0f22f3b](https://github.com/n8n-io/n8n/commit/0f22f3be92db71b6cb37382bc77c86fcd1b9e8de))
* **core:** Fix OIDC configuration update path ([#19065](https://github.com/n8n-io/n8n/issues/19065)) ([1ced801](https://github.com/n8n-io/n8n/commit/1ced80135833ce2cbd774a64824739d4e622ba25))
* **core:** Fix role management controller no-changelog ([#19107](https://github.com/n8n-io/n8n/issues/19107)) ([5be3181](https://github.com/n8n-io/n8n/commit/5be3181f2b506bb08188949ede755eb72bbfbc1c))
* **core:** Inline config.js to index.html to prevent CF from caching it ([#18945](https://github.com/n8n-io/n8n/issues/18945)) ([17ce65a](https://github.com/n8n-io/n8n/commit/17ce65a52967a914005713af4e8e61374e3057fe))
* **core:** Replace actual root when manually running tools of Agent Tools ([#19243](https://github.com/n8n-io/n8n/issues/19243)) ([188a013](https://github.com/n8n-io/n8n/commit/188a013ae0126905e4c3c3fc612e9a3444623c90))
* **core:** Resolve Python multiprocessing queue deadlock ([#19084](https://github.com/n8n-io/n8n/issues/19084)) ([de30ecc](https://github.com/n8n-io/n8n/commit/de30ecc359f3cc8389d1bb24ec7db2533f05dbf4))
* **core:** Set more reasonable defaults for scaling mode queue lock ([#19059](https://github.com/n8n-io/n8n/issues/19059)) ([35e4772](https://github.com/n8n-io/n8n/commit/35e4772210006cb771594dac042e8f2436585693))
* **core:** Update cached project association when moving a workflow ([#19227](https://github.com/n8n-io/n8n/issues/19227)) ([c5bbb6a](https://github.com/n8n-io/n8n/commit/c5bbb6a96f4c3166f92d9690272272bcbdf8c4b9))
* **editor:** Don't show update notification for unverified updates ([#18910](https://github.com/n8n-io/n8n/issues/18910)) ([abaa2c8](https://github.com/n8n-io/n8n/commit/abaa2c851b0fab2ac386fdba566e012de48b37fb))
* **editor:** Fix minor style bugs around parameter input ([#19150](https://github.com/n8n-io/n8n/issues/19150)) ([346d3b4](https://github.com/n8n-io/n8n/commit/346d3b4ba92b15c735508f68a852cd43210a06a7))
* **editor:** Fix pagination in Data Table list UI ([#19192](https://github.com/n8n-io/n8n/issues/19192)) ([0b24fb5](https://github.com/n8n-io/n8n/commit/0b24fb55e8c5f4375cf7be1b3ec55757a91f9dba))
* **editor:** Handle connection errors and credentials better in MCP Client Tool when executing directly  ([#19239](https://github.com/n8n-io/n8n/issues/19239)) ([97d0edd](https://github.com/n8n-io/n8n/commit/97d0eddd0ec1111544a0cc93adbaf8d8f8d9038f))
* **editor:** Load available resources for dynamic options ([#19235](https://github.com/n8n-io/n8n/issues/19235)) ([b713c50](https://github.com/n8n-io/n8n/commit/b713c503d658814b2de37dc800f5680eb2abc973))
* **editor:** Prevent search dialog from covering inline expression parameters ([#19238](https://github.com/n8n-io/n8n/issues/19238)) ([0d7f9ae](https://github.com/n8n-io/n8n/commit/0d7f9ae1822f09187fa78767509e3d84b9c9f99e))
* **editor:** Prevent variable value overflow ([#19026](https://github.com/n8n-io/n8n/issues/19026)) ([a90584b](https://github.com/n8n-io/n8n/commit/a90584b6bc9583e65da61e1ad9f8ae26a121359f))
* **editor:** Render last item on markdown task lists correctly ([#19225](https://github.com/n8n-io/n8n/issues/19225)) ([627dbd9](https://github.com/n8n-io/n8n/commit/627dbd9d78d8623fe6ee7cb6a6899d2e49460fc3))
* **editor:** Workflow diff UX improvements ([#19047](https://github.com/n8n-io/n8n/issues/19047)) ([277685e](https://github.com/n8n-io/n8n/commit/277685e9e539a24ef27695caac21f0900fb5c588))
* **Gemini Node:** Allow Nano Banana model to be selected ([#19080](https://github.com/n8n-io/n8n/issues/19080)) ([238fe84](https://github.com/n8n-io/n8n/commit/238fe845403741e7480318f1cc8a016186b4c213))
* **GoogleDrive Node:** Fix google service accounts uploading to shared drives ([#18952](https://github.com/n8n-io/n8n/issues/18952)) ([63672ad](https://github.com/n8n-io/n8n/commit/63672ad7972190cd3fd2d3dde9baa761103c748b))
* Improve error handling for community package installation ([#19103](https://github.com/n8n-io/n8n/issues/19103)) ([2001397](https://github.com/n8n-io/n8n/commit/200139738703db449fae9fcd7c018c06c1827edb))
* Improve input handling in package scanner ([#19147](https://github.com/n8n-io/n8n/issues/19147)) ([c10da38](https://github.com/n8n-io/n8n/commit/c10da38719194014ee1907d424c1c14e122a5ac3))
* Include third party licenses in the docker image ([#19144](https://github.com/n8n-io/n8n/issues/19144)) ([cda1a18](https://github.com/n8n-io/n8n/commit/cda1a18a887e5cb925061725d01cfc603cbdf900))
* **Merge Node:** Fix possible stack overflow ([#19101](https://github.com/n8n-io/n8n/issues/19101)) ([4313aa3](https://github.com/n8n-io/n8n/commit/4313aa315f623f5d88381cdc98aacff6a25dc9ba))
* **OpenAI Node:** Add proxy agent for Message an assistant operation ([#19250](https://github.com/n8n-io/n8n/issues/19250)) ([7025452](https://github.com/n8n-io/n8n/commit/70254526bb79d0198c3afdb92afaec936270e876))
* Put static types files behind authentication ([#18660](https://github.com/n8n-io/n8n/issues/18660)) ([69e6498](https://github.com/n8n-io/n8n/commit/69e6498d24248d046a1ab2e2cf2edea1f72d0f48))
* **Wait Node:** Allow wait node to accept `0` waiting time input ([#19159](https://github.com/n8n-io/n8n/issues/19159)) ([5968403](https://github.com/n8n-io/n8n/commit/59684039eedb696070581305c8433a7b2d61da70))


### Features

* Add release and lint scripts to node CLI ([#18935](https://github.com/n8n-io/n8n/issues/18935)) ([be8061c](https://github.com/n8n-io/n8n/commit/be8061c2a5782e192ac49306e65383d031ee0aa5))
* **Airtop Node:** Implement double-click and right click variants ([#18306](https://github.com/n8n-io/n8n/issues/18306)) ([9566f2b](https://github.com/n8n-io/n8n/commit/9566f2b5500a9e35f5e33e206996d45346412456))
* **API:** Add cancel status filters to the public api executions endpoint ([#19136](https://github.com/n8n-io/n8n/issues/19136)) ([4a21f79](https://github.com/n8n-io/n8n/commit/4a21f79f5cfa4e5fb8a0edff091384d8b8b595f4))
* **core:** Allow filtering workflows by `availableInMCP` ([#18646](https://github.com/n8n-io/n8n/issues/18646)) ([6432555](https://github.com/n8n-io/n8n/commit/6432555082b809efb023f26803865a290a7a3097))
* **core:** Update email templates ([#19137](https://github.com/n8n-io/n8n/issues/19137)) ([a794ab6](https://github.com/n8n-io/n8n/commit/a794ab6be3e7807840949a6982fc7f9f7bc450f8))
* **MongoDB Node:** Add driver info to MongoDB nodes ([#18615](https://github.com/n8n-io/n8n/issues/18615)) ([9a2d942](https://github.com/n8n-io/n8n/commit/9a2d942835f0c06dfd59468418d5db7a0d61109e))
* **MongoDB Vector Store Node:** Allow pre and post filtering ([#18506](https://github.com/n8n-io/n8n/issues/18506)) ([ee91aa0](https://github.com/n8n-io/n8n/commit/ee91aa00f116cec845a5355d051fd536964cb6e3))
* PAY-2613 add missing status field for select ([#19071](https://github.com/n8n-io/n8n/issues/19071)) ([9569965](https://github.com/n8n-io/n8n/commit/9569965a0b7c346858404e67e507b3fd9caeb762))



# [1.110.0](https://github.com/n8n-io/n8n/compare/n8n@1.109.0...n8n@1.110.0) (2025-09-01)


### Bug Fixes

* Add timeout to community node types request ([#18545](https://github.com/n8n-io/n8n/issues/18545)) ([644faf4](https://github.com/n8n-io/n8n/commit/644faf4f37686bfd364ba17853694253f3c0bac1))
* **core:** Add optional context parameter to track creation source for workflows, credentials, and projects ([#18736](https://github.com/n8n-io/n8n/issues/18736)) ([98bde4f](https://github.com/n8n-io/n8n/commit/98bde4f478124649dfd6a10badd45ea81ac36419))
* **core:** Fix truncate table names ([#18867](https://github.com/n8n-io/n8n/issues/18867)) ([215d5a1](https://github.com/n8n-io/n8n/commit/215d5a1eca4bf31a578549103a3ac80c4773d949))
* **core:** Fix waiting webhooks validation when n8n is behind proxy ([#18767](https://github.com/n8n-io/n8n/issues/18767)) ([f2eca28](https://github.com/n8n-io/n8n/commit/f2eca28e6479143dce01f48700144714d74f4ed4))
* **core:** Resolve SSH path issues on Windows ([#18889](https://github.com/n8n-io/n8n/issues/18889)) ([66b6b8f](https://github.com/n8n-io/n8n/commit/66b6b8f6dfc8af5f03a999979d09af3a4fb6772c))
* **core:** Sanitize all non-alphanumeric characters from tool names ([#18800](https://github.com/n8n-io/n8n/issues/18800)) ([b73f239](https://github.com/n8n-io/n8n/commit/b73f2393b428e0f059ec913fc98fac0856a23e5f))
* **editor:** Allow password managers to autocomplete MFA code during login ([#18865](https://github.com/n8n-io/n8n/issues/18865)) ([0c803a6](https://github.com/n8n-io/n8n/commit/0c803a63e49f3bbeaeec5db4411a3876164b376b))
* **editor:** Debug in Editor preserves binary data and prevents incorrect dirty marking ([#18998](https://github.com/n8n-io/n8n/issues/18998)) ([6aeced8](https://github.com/n8n-io/n8n/commit/6aeced8aed4672a5aeae6a82b96c8f9fed69fab9))
* **editor:** Do not focus expression input if it was not in focus before switching ([#18744](https://github.com/n8n-io/n8n/issues/18744)) ([a6406b9](https://github.com/n8n-io/n8n/commit/a6406b904f2fb75e81e94fae2a17a5ffd58966f5))
* **editor:** Fix "error connecting to n8n" error if not logged in ([#18818](https://github.com/n8n-io/n8n/issues/18818)) ([51c21e0](https://github.com/n8n-io/n8n/commit/51c21e00d058bba9c4472e4a24ed0ab11b447ddf))
* **editor:** Fix broken project creation no-changelog ([#19027](https://github.com/n8n-io/n8n/issues/19027)) ([864b51d](https://github.com/n8n-io/n8n/commit/864b51d1358aa34e66a3ecf80df2b8978d7211bf))
* **editor:** Fix role DTO exported types ([#18977](https://github.com/n8n-io/n8n/issues/18977)) ([2882547](https://github.com/n8n-io/n8n/commit/2882547a699118a7b2e9abce7a714aa972fcc871))
* **editor:** Fix wf history button visibility issue ([#18804](https://github.com/n8n-io/n8n/issues/18804)) ([e29ed15](https://github.com/n8n-io/n8n/commit/e29ed1532a3cf773799e69906e247765c984071e))
* **editor:** Fix workflow list pagination visibility ([#18847](https://github.com/n8n-io/n8n/issues/18847)) ([4d84d58](https://github.com/n8n-io/n8n/commit/4d84d589b27d0d253abe2da2cbbae701249be312))
* **editor:** Make Code node lint errors colorblind friendly ([#18958](https://github.com/n8n-io/n8n/issues/18958)) ([619ff93](https://github.com/n8n-io/n8n/commit/619ff935f1e540f1061aa33c78045e70a4902e00))
* **editor:** Prevent execution data from leaking into workflow diffs UI ([#18605](https://github.com/n8n-io/n8n/issues/18605)) ([4bbf7cb](https://github.com/n8n-io/n8n/commit/4bbf7cb749192420ee7014f3f51fd0e12f6f3b24))
* **editor:** Remove the enlarged thumb-target area for the scrollbar ([#18810](https://github.com/n8n-io/n8n/issues/18810)) ([cff3f4a](https://github.com/n8n-io/n8n/commit/cff3f4a67e7ecf1123b9c5c5483336023157c16c))
* **editor:** Set workflow name width at different breakpoints ([#18956](https://github.com/n8n-io/n8n/issues/18956)) ([e663858](https://github.com/n8n-io/n8n/commit/e663858c9d640e1c14505693cd09a74620a9c79c))
* **editor:** Support line breaks in resource mapper field names ([#18982](https://github.com/n8n-io/n8n/issues/18982)) ([5ea4be4](https://github.com/n8n-io/n8n/commit/5ea4be474e0ed14eea8bce585a59824c08ac66f5))
* **Filter Node:** Propagate toggle changes correctly ([#18864](https://github.com/n8n-io/n8n/issues/18864)) ([a53aa57](https://github.com/n8n-io/n8n/commit/a53aa570d8224af7620a1b89c21886c6c13cf25a))
* **GithubTrigger Node:** Correctly access httpCode from error object ([#17697](https://github.com/n8n-io/n8n/issues/17697)) ([6379ce5](https://github.com/n8n-io/n8n/commit/6379ce53a93626dd728573eaa3db6614caf0484c))
* **HubSpot Node:** Assign owner ID ([#18753](https://github.com/n8n-io/n8n/issues/18753)) ([07db137](https://github.com/n8n-io/n8n/commit/07db137551d63c5bc987ea97d2ed776d127c6717))
* **HubSpot Node:** Require DueDate for task creation ([#18799](https://github.com/n8n-io/n8n/issues/18799)) ([e665cbf](https://github.com/n8n-io/n8n/commit/e665cbf2788f9efdcf4caebaa671f778593ba5ea))
* **Rename Keys Node:** Add a warning for regex that affect performance ([#18911](https://github.com/n8n-io/n8n/issues/18911)) ([0d1a0b5](https://github.com/n8n-io/n8n/commit/0d1a0b54318008305dd5ce508f68675b8f24a015))
* **Slack Trigger Node:** Handle undefined item in event channel extraction ([#18676](https://github.com/n8n-io/n8n/issues/18676)) ([ed090f0](https://github.com/n8n-io/n8n/commit/ed090f0e66babdafad1cce212a51c961b2e507c2))
* Update packages in base image to resolve CVE-2025-58050 ([#19034](https://github.com/n8n-io/n8n/issues/19034)) ([bb033fc](https://github.com/n8n-io/n8n/commit/bb033fc148000a7c47250f967d07efc97e1c8e5c))


### Features

* Add option to restrict credential usage in http request node ([#17583](https://github.com/n8n-io/n8n/issues/17583)) ([f7f70f2](https://github.com/n8n-io/n8n/commit/f7f70f241e2eac2b98720b8d4921f05009b12fe6))
* Adds community scanner package ([#18946](https://github.com/n8n-io/n8n/issues/18946)) ([8dae565](https://github.com/n8n-io/n8n/commit/8dae565dc3400faf1507f8787231408cd530ec8e))
* **core:** Allow custom project roles from being set to a user project relation ([#18926](https://github.com/n8n-io/n8n/issues/18926)) ([027edbe](https://github.com/n8n-io/n8n/commit/027edbe89da29d773d20f82d946875314701064b))
* **core:** Rebuild project roles to load from the database ([#17909](https://github.com/n8n-io/n8n/issues/17909)) ([f757790](https://github.com/n8n-io/n8n/commit/f7577903945e7737ade17ab30e54a3b3b243c939))
* **editor:** Add Python to Code actions ([#18668](https://github.com/n8n-io/n8n/issues/18668)) ([38f25d7](https://github.com/n8n-io/n8n/commit/38f25d74eb662456f9a0857d2f24762f58648ae7))
* **editor:** Display custom roles in the project role dropdown ([#18983](https://github.com/n8n-io/n8n/issues/18983)) ([bf198f8](https://github.com/n8n-io/n8n/commit/bf198f82632564079da64c089a4530c051e8ad9d))
* **editor:** Provide default ExecuteWorkflow node names based on the selected workflow ([#18953](https://github.com/n8n-io/n8n/issues/18953)) ([73cc042](https://github.com/n8n-io/n8n/commit/73cc042ebc6e0a74465fa00d80311e7dcbe447ca))
* **editor:** Support relative dependent parameters for collection NodeProperties ([#18916](https://github.com/n8n-io/n8n/issues/18916)) ([a15391a](https://github.com/n8n-io/n8n/commit/a15391acc96f631c1f5b4675ae84ce71a93f6903))


### Performance Improvements

* Skip browser logging for production tasks in native Python runner ([#19028](https://github.com/n8n-io/n8n/issues/19028)) ([d0ffd6e](https://github.com/n8n-io/n8n/commit/d0ffd6e65958c8cf9b337bdfbd5ce5eccad7091b))



# [1.109.0](https://github.com/n8n-io/n8n/compare/n8n@1.108.0...n8n@1.109.0) (2025-08-25)


### Bug Fixes

* Also run DB tests in CI when any test inside CLI package have changes ([#18527](https://github.com/n8n-io/n8n/issues/18527)) ([3386047](https://github.com/n8n-io/n8n/commit/33860473213e35e9e4ca6725b05342cd3954f15c))
* Change siderbar to use innerWidth instead of outerWidth ([#18727](https://github.com/n8n-io/n8n/issues/18727)) ([4206b4a](https://github.com/n8n-io/n8n/commit/4206b4ab50f77fac326e7826e23dc145a5294029))
* **core:** Don't reveal whether files exists if they're not within allowed paths ([#18480](https://github.com/n8n-io/n8n/issues/18480)) ([970351b](https://github.com/n8n-io/n8n/commit/970351bf238f475128d712d9bb2115c3d5ec0e2f))
* **core:** Dynamically import `@sentry/node-native` ([#18586](https://github.com/n8n-io/n8n/issues/18586)) ([0f463c7](https://github.com/n8n-io/n8n/commit/0f463c781d56df5f1e24b0b333885ac2143a0f7c))
* **core:** Ensure error.message is a string before checking for specific messages ([#17417](https://github.com/n8n-io/n8n/issues/17417)) ([0d4c890](https://github.com/n8n-io/n8n/commit/0d4c89058d3927f2c8b601e691a38181d9fb1d06))
* **core:** Fix getting webhook methods from path only when dynamic webhook path ([#17803](https://github.com/n8n-io/n8n/issues/17803)) ([a5c6e2f](https://github.com/n8n-io/n8n/commit/a5c6e2fecfd2ee64c28298a915bfc83ad4e35331))
* **core:** Handle insights by workflow table for deleted workflows ([#18496](https://github.com/n8n-io/n8n/issues/18496)) ([741dd69](https://github.com/n8n-io/n8n/commit/741dd693a474d905e73a90214aa143d5ca26af7f))
* **core:** Integer overflow in insights runtime calculation ([#18122](https://github.com/n8n-io/n8n/issues/18122)) ([c767831](https://github.com/n8n-io/n8n/commit/c7678311b3f6f69b80e6ff1d3dd5a8354ae16f6e))
* **core:** Make first queue reconciliation immediate on startup ([#18490](https://github.com/n8n-io/n8n/issues/18490)) ([961fc53](https://github.com/n8n-io/n8n/commit/961fc538d7df06b0878dce43805df886377313b5))
* **core:** Move `/module-settings` behind auth ([#18492](https://github.com/n8n-io/n8n/issues/18492)) ([df54c10](https://github.com/n8n-io/n8n/commit/df54c10172bb6143a0d0d5eaa66189b379aaca06))
* **core:** Redact secrets from credential test error message ([#18386](https://github.com/n8n-io/n8n/issues/18386)) ([309048a](https://github.com/n8n-io/n8n/commit/309048ae3cfb344f73bb62355357460503210da9))
* **core:** Restore community node types controller ([#18665](https://github.com/n8n-io/n8n/issues/18665)) ([110439c](https://github.com/n8n-io/n8n/commit/110439c010b9ad6018ee2e3d806f95a4dac83e22))
* Do not wait for community nodes to load ([#18628](https://github.com/n8n-io/n8n/issues/18628)) ([f7a6631](https://github.com/n8n-io/n8n/commit/f7a663172b29873904455486695ba5feb9c9f6dd))
* **editor:** Add fallback color for NodeItem Icons ([#18607](https://github.com/n8n-io/n8n/issues/18607)) ([c8dc7d9](https://github.com/n8n-io/n8n/commit/c8dc7d9ab6a8a25793f85c828c82e00a69268ccd))
* **editor:** Change the underlying data store db column types to support decimal numbers ([#18549](https://github.com/n8n-io/n8n/issues/18549)) ([25d6636](https://github.com/n8n-io/n8n/commit/25d66367110db827ea5f511c34d9b2cabffb24d0))
* **editor:** Dont check for whats new if in demo mode ([#18532](https://github.com/n8n-io/n8n/issues/18532)) ([9881b9e](https://github.com/n8n-io/n8n/commit/9881b9e4358be73210cfda52c024d6ffd4318178))
* **editor:** Fix importing curl commands with comma ([#18409](https://github.com/n8n-io/n8n/issues/18409)) ([d3431c0](https://github.com/n8n-io/n8n/commit/d3431c0ae5a3e64a3511c190826cafc3640ddd6c))
* **editor:** Hide sso auth protocol selection if no license available ([#18655](https://github.com/n8n-io/n8n/issues/18655)) ([8b4e8f3](https://github.com/n8n-io/n8n/commit/8b4e8f347f659b14fffc7d9286acee23d9b94ef2))
* **editor:** Refactor for-of loops to replace forEach on Set.values() for node 20 compatibility ([#18529](https://github.com/n8n-io/n8n/issues/18529)) ([06b586a](https://github.com/n8n-io/n8n/commit/06b586af44f4139d45e79bc020ed0ebdab275988))
* **editor:** Show test URL when trigger is listening because of a connected node ([#18403](https://github.com/n8n-io/n8n/issues/18403)) ([010b6dc](https://github.com/n8n-io/n8n/commit/010b6dc7a5c1fa536f68d3a72d41b9e39338a273))
* **editor:** Update misleading toaster success message when creating a personal workflow / credential ([#18541](https://github.com/n8n-io/n8n/issues/18541)) ([b6681bb](https://github.com/n8n-io/n8n/commit/b6681bb92cd0ee75f2ea03244a2dfdb549354657))
* **HTTP Request Node:** Handle response errors correctly when continueOnFail is set ([#18207](https://github.com/n8n-io/n8n/issues/18207)) ([5c53c22](https://github.com/n8n-io/n8n/commit/5c53c22d0a3f3a149f006c3ca1efb05da77ca6a8))
* **Microsoft SQL Node:** Correctly resolve expressions with dollar signs ([#18411](https://github.com/n8n-io/n8n/issues/18411)) ([f49f2cb](https://github.com/n8n-io/n8n/commit/f49f2cb59eab5092df0b6101cd227403b12f5726))
* **Slack Node:** Refine label name for reply broadcast setting ([#15658](https://github.com/n8n-io/n8n/issues/15658)) ([5339350](https://github.com/n8n-io/n8n/commit/53393508ea5f3afa2c4be2d6877e6e9842ac71dc))


### Features

* **core:** Enable modules to append to workflow context ([#18551](https://github.com/n8n-io/n8n/issues/18551)) ([0488ea3](https://github.com/n8n-io/n8n/commit/0488ea3e8d42d228f3b663f1cb37ca7502494bc9))
* **editor:** Add Alt+Meta+O keyboard shortcut for the About modal ([#18530](https://github.com/n8n-io/n8n/issues/18530)) ([94526b9](https://github.com/n8n-io/n8n/commit/94526b997571b4774ed1be242fa59c021e8b0410))
* **editor:** Add mechanism for showing hidden nodes if required modules are enabled ([#18585](https://github.com/n8n-io/n8n/issues/18585)) ([da88075](https://github.com/n8n-io/n8n/commit/da8807562310224379388398824b071a36584c59))
* Evaluation framework for AI Workflow Builder ([#18016](https://github.com/n8n-io/n8n/issues/18016)) ([fb3a2ae](https://github.com/n8n-io/n8n/commit/fb3a2ae2167b4f0077026931a601478ee74e09c0))
* **OpenAI Node:** Add reasoning effort for GPT-5 ([#18644](https://github.com/n8n-io/n8n/issues/18644)) ([ca8629e](https://github.com/n8n-io/n8n/commit/ca8629ef30e75637d04fa5a57959a7a546a9fec1))


### Performance Improvements

* **core:** Optimize workflow getNodeConnectionIndexes ([#18542](https://github.com/n8n-io/n8n/issues/18542)) ([554327e](https://github.com/n8n-io/n8n/commit/554327ee78e488cd773bd7f547c696ffd3d10985))
* **OpenAI Node:** Use streaming for file operations ([#18666](https://github.com/n8n-io/n8n/issues/18666)) ([1f1730c](https://github.com/n8n-io/n8n/commit/1f1730c27d491a444507f9de1db9b6988dfcf455))



# [1.108.0](https://github.com/n8n-io/n8n/compare/n8n@1.107.0...n8n@1.108.0) (2025-08-18)


### Bug Fixes

* Add missing type check, updated turbo config ([#18341](https://github.com/n8n-io/n8n/issues/18341)) ([8259b5f](https://github.com/n8n-io/n8n/commit/8259b5f5c68847ca8254f253533b8197ffaea6c2))
* **Airtable Node:** Create record: skip type validation when typecast is enabled ([#18393](https://github.com/n8n-io/n8n/issues/18393)) ([dcd060c](https://github.com/n8n-io/n8n/commit/dcd060ce33bd9be48ceba8d01b74e7b36073953b))
* **core:** Account for readonly properties when replacing circular references ([#18408](https://github.com/n8n-io/n8n/issues/18408)) ([3848673](https://github.com/n8n-io/n8n/commit/3848673921fd61ddc61762503f1589eef1e2689d))
* **core:** Check all node outputs when using "Always Output Data" before adding an empty object ([#17602](https://github.com/n8n-io/n8n/issues/17602)) ([f1a87af](https://github.com/n8n-io/n8n/commit/f1a87af0598d33a93f1be9c13ee37c5f51c286c1))
* **core:** Fix error message parsing for disallowed modules ([#18216](https://github.com/n8n-io/n8n/issues/18216)) ([04738d4](https://github.com/n8n-io/n8n/commit/04738d442d4b3025e78c9e9f9082f715b2269713))
* **core:** Normalize quotes in strings in env vars ([#18219](https://github.com/n8n-io/n8n/issues/18219)) ([71f5151](https://github.com/n8n-io/n8n/commit/71f51519dec23abf92711d409d6ab3920961624c))
* **core:** Populate MCP endpoints in frontend settings ([#17939](https://github.com/n8n-io/n8n/issues/17939)) ([14787fd](https://github.com/n8n-io/n8n/commit/14787fd5a401c6dbc64bc5b3aca122e9ee36cfdc))
* **core:** Support inserting dates to data store via the insert endpoint ([#18404](https://github.com/n8n-io/n8n/issues/18404)) ([dc86984](https://github.com/n8n-io/n8n/commit/dc86984ae05e05be65a4b99e2223ffefa77c8442))
* **core:** Support MCP server when offloading is enabled ([#18214](https://github.com/n8n-io/n8n/issues/18214)) ([26aed72](https://github.com/n8n-io/n8n/commit/26aed72c6e55226ed27c4b08bfc4fa20ea15000f))
* **core:** Update moment-timezone to resolve Mexico DST issue ([#18431](https://github.com/n8n-io/n8n/issues/18431)) ([cb7dd2e](https://github.com/n8n-io/n8n/commit/cb7dd2e8ba21963e6984ab3857812315c0942a4e))
* **editor:** Fix 'Shared with me' page tabs and header ([#18199](https://github.com/n8n-io/n8n/issues/18199)) ([eecfa68](https://github.com/n8n-io/n8n/commit/eecfa68f504c93872c9c68fdbe2a94c21d5b9363))
* **editor:** Fix node graph generation for evaluation node in set metrics mode ([#18344](https://github.com/n8n-io/n8n/issues/18344)) ([8442382](https://github.com/n8n-io/n8n/commit/84423824717f38e904f593cdf731fdc88e3f87f2))
* **editor:** Fix schema view output index filtering  ([#18383](https://github.com/n8n-io/n8n/issues/18383)) ([675bb50](https://github.com/n8n-io/n8n/commit/675bb50122ed2fbc9087f8a0a37226fa75b67c68))
* **editor:** Fix TS type export for ListDataStoreContentFilter ([#18282](https://github.com/n8n-io/n8n/issues/18282)) ([f1080db](https://github.com/n8n-io/n8n/commit/f1080dbac0591721061824bd4c8b1110b846b8e6))
* **editor:** Restore background color of NDV backdrop ([#18327](https://github.com/n8n-io/n8n/issues/18327)) ([5917dc8](https://github.com/n8n-io/n8n/commit/5917dc88cbfba54157a29240cc050b6a6806ecb9))
* **editor:** Revert changes from PRs [#16059](https://github.com/n8n-io/n8n/issues/16059), [#17959](https://github.com/n8n-io/n8n/issues/17959), [#17759](https://github.com/n8n-io/n8n/issues/17759), and [#17585](https://github.com/n8n-io/n8n/issues/17585) ([#18382](https://github.com/n8n-io/n8n/issues/18382)) ([62f4361](https://github.com/n8n-io/n8n/commit/62f4361f4653c453899c2ccc2ff7367418e38530))
* **editor:** Show custom project icons on create sidebar dropdown ([#18204](https://github.com/n8n-io/n8n/issues/18204)) ([d2cc939](https://github.com/n8n-io/n8n/commit/d2cc9397256137798168913f5823edd259128845))
* **editor:** Source control workflow diff release ([#17974](https://github.com/n8n-io/n8n/issues/17974)) ([abf7b11](https://github.com/n8n-io/n8n/commit/abf7b11e09ce524d5ae620e3cd84d57f29e9c5ac))
* **editor:** Update SourceControlPullModal to look and feel the same as SourceControlPushModal ([#18129](https://github.com/n8n-io/n8n/issues/18129)) ([d06581e](https://github.com/n8n-io/n8n/commit/d06581ef3febbbeec39d598ae51887dca25c70a6))
* **editor:** Use native behaviour on arrow left and right in nodes panel ([#18401](https://github.com/n8n-io/n8n/issues/18401)) ([08d8249](https://github.com/n8n-io/n8n/commit/08d82491c8cc04a01be7935248a614d8768c1694))
* **Google Gemini Node:** Use custom host from credential ([#18405](https://github.com/n8n-io/n8n/issues/18405)) ([041672e](https://github.com/n8n-io/n8n/commit/041672eb6ce63a9593349ff01f3e14a6446ee2b9))
* **Grist Node:** Test for integer precision loss ([#17136](https://github.com/n8n-io/n8n/issues/17136)) ([735e064](https://github.com/n8n-io/n8n/commit/735e0647490f411a4031eec71f1af0581d129ef6))
* **Local File Trigger Node:** Add chokidar dependency back ([#18260](https://github.com/n8n-io/n8n/issues/18260)) ([9043869](https://github.com/n8n-io/n8n/commit/9043869b101f0339368112803b168336f2a1f8b2))
* **n8n Form Trigger Node:** Make order of form field name inputs consistent ([#18410](https://github.com/n8n-io/n8n/issues/18410)) ([2203d1e](https://github.com/n8n-io/n8n/commit/2203d1e77f321b0c1bf9bd4d8915865331f5a66c))
* Update dependencies to close cves ([#18215](https://github.com/n8n-io/n8n/issues/18215)) ([d7d44f9](https://github.com/n8n-io/n8n/commit/d7d44f9e77592e906bfb9925c07af1a2ee3cfd77))
* **Wait Node:** Add validation for wait amount and unit ([#18239](https://github.com/n8n-io/n8n/issues/18239)) ([9515cbd](https://github.com/n8n-io/n8n/commit/9515cbd60e9e8f5bb6887cfbfad74e09a5fa9f0e))


### Features

* Add n8n-node CLI with commands to scaffold and develop nodes ([#18090](https://github.com/n8n-io/n8n/issues/18090)) ([c26104b](https://github.com/n8n-io/n8n/commit/c26104b3ba4f4fbd191e89b5ecd5903fdb7636fe))
* Add performance plan presets for testcontainers ([#18231](https://github.com/n8n-io/n8n/issues/18231)) ([726f0ff](https://github.com/n8n-io/n8n/commit/726f0ff37aa9f5b615510884da3ed9f9834eae8a))
* Checkboxes and Radio Buttons field types ([#17934](https://github.com/n8n-io/n8n/issues/17934)) ([fdab0ab](https://github.com/n8n-io/n8n/commit/fdab0ab116afa438db1338aaddd3dfa6ef82b2bc))
* **editor:** Improve feedback buttons behavior ([#18247](https://github.com/n8n-io/n8n/issues/18247)) ([83c3a98](https://github.com/n8n-io/n8n/commit/83c3a98cf4875cc7b105063f972cf7d08b0561f4))
* **editor:** Make popped out log view window maximizable ([#18223](https://github.com/n8n-io/n8n/issues/18223)) ([aeef79d](https://github.com/n8n-io/n8n/commit/aeef79df5366580be77dd57bb91636a4df12ec4f))
* **MCP Client Tool Node:** Add Timeout config for the MCP Client tool ([#15886](https://github.com/n8n-io/n8n/issues/15886)) ([f575427](https://github.com/n8n-io/n8n/commit/f575427d4dfb56370badc2f2efc561d917ce97c4))
* **Todoist Node:** Add more resources and operations  ([#17925](https://github.com/n8n-io/n8n/issues/17925)) ([409085e](https://github.com/n8n-io/n8n/commit/409085e8fe1d15386eda540f51d0cbb5eac30cdc))


### Performance Improvements

* **editor:** Fix log view related slowdown of manual execution with large data ([#18256](https://github.com/n8n-io/n8n/issues/18256)) ([56c278c](https://github.com/n8n-io/n8n/commit/56c278cda06dcc70eea450bf39d84bfa54aa3278))



# [1.107.0](https://github.com/n8n-io/n8n/compare/n8n@1.106.0...n8n@1.107.0) (2025-08-11)


### Bug Fixes

* **API:** Add shared field to workflows list rest API handler ([#17804](https://github.com/n8n-io/n8n/issues/17804)) ([31af6d1](https://github.com/n8n-io/n8n/commit/31af6d11bb9c3f99449ef0deae4d4401e0efda8d))
* **Beeminder Node:** Remove unnecessary form data conversion for API token auth to work ([#18133](https://github.com/n8n-io/n8n/issues/18133)) ([716577e](https://github.com/n8n-io/n8n/commit/716577e2820deb35b7057eb9414c9fbe9b6b4fde))
* **Chat Trigger Node:** Prevent XSS vulnerabilities and improve parameter validation ([#18148](https://github.com/n8n-io/n8n/issues/18148)) ([d4ef191](https://github.com/n8n-io/n8n/commit/d4ef191be0b39b65efa68559a3b8d5dad2e102b2))
* **core:** Consider pinned data as valid paths for single node execution ([#17959](https://github.com/n8n-io/n8n/issues/17959)) ([32f4794](https://github.com/n8n-io/n8n/commit/32f47948d6cb6ba33cd253aa855a7bcf79f28713))
* **core:** Fix `null` handling in Python sandbox ([#18189](https://github.com/n8n-io/n8n/issues/18189)) ([b5f47ec](https://github.com/n8n-io/n8n/commit/b5f47ec110dc70cb1761e60d6bfae860ddedf2bf))
* **core:** Fix disallowed module error in task runner ([#18190](https://github.com/n8n-io/n8n/issues/18190)) ([09caa05](https://github.com/n8n-io/n8n/commit/09caa0572623ff4aead2aeb708978528d9c110ed))
* **core:** Fix metric default value handling and add AI model connection validation for setMetric operation in Evaluation ([#18088](https://github.com/n8n-io/n8n/issues/18088)) ([03c75c3](https://github.com/n8n-io/n8n/commit/03c75c365bb7d384924ccaf1114fc267c7569327))
* **core:** Handle non-existing files when checking if it is a symlink ([#18010](https://github.com/n8n-io/n8n/issues/18010)) ([49f3115](https://github.com/n8n-io/n8n/commit/49f3115429fd465f5292ef06785c00a210ad029e))
* **core:** Handle null workflow settings in toSaveSettings ([#17972](https://github.com/n8n-io/n8n/issues/17972)) ([642e68e](https://github.com/n8n-io/n8n/commit/642e68e345c023d6232b02cb83fb84e0342faca0))
* **core:** Handle Redis cache prefix on cluster mode ([#17957](https://github.com/n8n-io/n8n/issues/17957)) ([f4a0413](https://github.com/n8n-io/n8n/commit/f4a04132d9550af55c364fa9d7df9c57b838dcb7))
* **core:** Mark invalid enqueued executions as crashed during startup for legacy SQLite driver ([#17629](https://github.com/n8n-io/n8n/issues/17629)) ([318a91a](https://github.com/n8n-io/n8n/commit/318a91a3e9cd31d2790ae9a90b0267e4549e5737))
* **core:** Prevent re-entry during workflow activation ([#17965](https://github.com/n8n-io/n8n/issues/17965)) ([e8dad4e](https://github.com/n8n-io/n8n/commit/e8dad4e030dc91207d72385c202241260e33fe7e))
* **core:** Protect against duplicate cron registration ([#18005](https://github.com/n8n-io/n8n/issues/18005)) ([948ebe6](https://github.com/n8n-io/n8n/commit/948ebe67023542353d325141ec1d88612413041f))
* **core:** Remove temporary uploaded files from webhook calls ([#18128](https://github.com/n8n-io/n8n/issues/18128)) ([c610c3a](https://github.com/n8n-io/n8n/commit/c610c3af3eafd05e2b9e78c4e66dba588c4852a1))
* **editor:** Add a hint for showing archived workflows when there are no active ones ([#18120](https://github.com/n8n-io/n8n/issues/18120)) ([7e4c5af](https://github.com/n8n-io/n8n/commit/7e4c5af38397031e3850e277562dbe61020c91aa))
* **editor:** Connection port mapped incorrectly when changed dynamically ([#17958](https://github.com/n8n-io/n8n/issues/17958)) ([566789c](https://github.com/n8n-io/n8n/commit/566789caee49d157b7154adbe60dadb0ea858e06))
* **editor:** Correct ai template url ([#17908](https://github.com/n8n-io/n8n/issues/17908)) ([bdc3a91](https://github.com/n8n-io/n8n/commit/bdc3a9172df09a2b218fd447cd9c3eab6bcfcec6))
* **editor:** Enhance changes dropdown in WorkflowDiffModal ([#18033](https://github.com/n8n-io/n8n/issues/18033)) ([bc76643](https://github.com/n8n-io/n8n/commit/bc7664397607972dae72d97b2cacf592d3c93f83))
* **editor:** Enhance SourceControlPullModal with improved item structure and styling ([#18049](https://github.com/n8n-io/n8n/issues/18049)) ([d6bc4ab](https://github.com/n8n-io/n8n/commit/d6bc4abee21c39efcd13f3f1f9e5c98b1094a48d))
* **editor:** Fix an issue with overlapping elements in the Assignment component ([#18041](https://github.com/n8n-io/n8n/issues/18041)) ([c7108f4](https://github.com/n8n-io/n8n/commit/c7108f4a0631e3ec8a971da81e2fc8ed7727cfe8))
* **editor:** Fix loading of error workflows in settings ([#18126](https://github.com/n8n-io/n8n/issues/18126)) ([3d846f6](https://github.com/n8n-io/n8n/commit/3d846f62d916c1476940f73241b29beff1b97f47))
* **editor:** Focus editable text input when clicking anywhere on the element ([#17780](https://github.com/n8n-io/n8n/issues/17780)) ([7b92e33](https://github.com/n8n-io/n8n/commit/7b92e33b3b2530775004ce36ea9dacac1175e533))
* **editor:** Hide Evaluations setup wizard if protected instance ([#18055](https://github.com/n8n-io/n8n/issues/18055)) ([99c2f37](https://github.com/n8n-io/n8n/commit/99c2f3715eb9eef1677c55d2ece4418aa3be435f))
* **editor:** Improve workflow diff components ([#18018](https://github.com/n8n-io/n8n/issues/18018)) ([95ed3c5](https://github.com/n8n-io/n8n/commit/95ed3c5c929e7f9632edb92f67370901f162a3d9))
* **editor:** Improve WorkflowDiffModal UI ([#17862](https://github.com/n8n-io/n8n/issues/17862)) ([eca95f3](https://github.com/n8n-io/n8n/commit/eca95f3432148e710d87e233ca9b4d5feafddb5c))
* **editor:** Migrate from [@import](https://github.com/import) to [@use](https://github.com/use) for SCSS files to address deprecation warnings ([#17858](https://github.com/n8n-io/n8n/issues/17858)) ([b7887bf](https://github.com/n8n-io/n8n/commit/b7887bf899f7e11afade26a911f0b02eb9eff8e5))
* **editor:** Update node status icons precedence (executing -> highest) ([#18003](https://github.com/n8n-io/n8n/issues/18003)) ([dd04924](https://github.com/n8n-io/n8n/commit/dd049249be17d556c40105a22ac4e68bd7f526e1))
* **editor:** Using a for-of loop on Map entries (forEach supported from node v22) ([#18064](https://github.com/n8n-io/n8n/issues/18064)) ([743c120](https://github.com/n8n-io/n8n/commit/743c1208809d9bcfd038764807e4b7df8012a36f))
* Empty onclick breaks range parser in HTML editor ([#18032](https://github.com/n8n-io/n8n/issues/18032)) ([b6c7810](https://github.com/n8n-io/n8n/commit/b6c781084463faf8d139dbaed649cff75a4170a3))
* Extend deduplication check to all webhook-based triggers and chat trigger ([#18044](https://github.com/n8n-io/n8n/issues/18044)) ([847a5d8](https://github.com/n8n-io/n8n/commit/847a5d822f77a3362f382c17070d49ccc6e3d999))
* Fix hot reloading of custom nodes ([#18094](https://github.com/n8n-io/n8n/issues/18094)) ([a5fa808](https://github.com/n8n-io/n8n/commit/a5fa808d4a872b1fbaedf5be62223a4760e544a8))
* **GraphQL Node:** Refresh OAuth2 token when it expires ([#17891](https://github.com/n8n-io/n8n/issues/17891)) ([381c146](https://github.com/n8n-io/n8n/commit/381c146dd46afe93105bdd859012fc0c19e3d156))
* **HubSpot Node:** Add missing fields for Contact - Upsert ([#18035](https://github.com/n8n-io/n8n/issues/18035)) ([678f468](https://github.com/n8n-io/n8n/commit/678f468f6881691d5c7bdc49d6206b429b442f2f))
* **Hugging Face Inference Model Node, Embeddings Hugging Face Inference Node:** Fix credential validation for HF nodes and add provider for  ([#18047](https://github.com/n8n-io/n8n/issues/18047)) ([a1682e8](https://github.com/n8n-io/n8n/commit/a1682e8fe436c52a2a95cceb6cde6316ae586764))
* **Jira Software Node:** Get All Issues operation with Return All hangs ([#17825](https://github.com/n8n-io/n8n/issues/17825)) ([2792b6c](https://github.com/n8n-io/n8n/commit/2792b6cb0a2c3a2dcab207a91ca1dd6403d10efe))
* **Mandrill Node:** Fix a typo in subaccount in options ([#18103](https://github.com/n8n-io/n8n/issues/18103)) ([833bcdd](https://github.com/n8n-io/n8n/commit/833bcdde00fb9a03536b6af0469af0e2c5951f5c))
* Properly serialize metadata objects in Chat UI  ([#17963](https://github.com/n8n-io/n8n/issues/17963)) ([c4c46b8](https://github.com/n8n-io/n8n/commit/c4c46b8ff93abab45426682f8b371997fb42d52d))
* **Reranker Cohere Node:** Add 'Top N' parameter to control document return count ([#17921](https://github.com/n8n-io/n8n/issues/17921)) ([523a55d](https://github.com/n8n-io/n8n/commit/523a55d5ee9421cab285dbea88fd5ecfea121ed4))


### Features

* Add token to sendAndWait operations links to walidate in webhook ([#17566](https://github.com/n8n-io/n8n/issues/17566)) ([9cb5754](https://github.com/n8n-io/n8n/commit/9cb5754f3383a16ce4dc2bb9133cede856172baa))
* **core:** Add Support for Additional Body Properties in OAuth2 API Client Credentials Flow ([#16573](https://github.com/n8n-io/n8n/issues/16573)) ([22ca768](https://github.com/n8n-io/n8n/commit/22ca768c13406a86899e36a36dcc18d63f492723))
* **core:** Unlock queue metrics for multi-main ([#17977](https://github.com/n8n-io/n8n/issues/17977)) ([3b701b1](https://github.com/n8n-io/n8n/commit/3b701b15d68c7ae038855b4b261cef15aa44a316))
* **Discord Node:** Add support for OAuth custom scopes ([#16708](https://github.com/n8n-io/n8n/issues/16708)) ([61f2838](https://github.com/n8n-io/n8n/commit/61f2838a9060aa85458a903bab2549d9a768ee60))
* **editor:** Add pre-built agents experiment ([#18124](https://github.com/n8n-io/n8n/issues/18124)) ([5a69d2a](https://github.com/n8n-io/n8n/commit/5a69d2a2f35cc86685b6eb42e870a2e3ed85c248))
* **editor:** Add Production checklist for active workflows ([#17756](https://github.com/n8n-io/n8n/issues/17756)) ([6046d24](https://github.com/n8n-io/n8n/commit/6046d24c741570d1d092230808a392bce0103d33))
* **editor:** Expand telemetry for "User added node to workflow canvas" event ([#18150](https://github.com/n8n-io/n8n/issues/18150)) ([9b103af](https://github.com/n8n-io/n8n/commit/9b103af9355cf957abddd789c1554595be97c5d8))
* **editor:** Stop auto-renaming legacy default node names ([#18012](https://github.com/n8n-io/n8n/issues/18012)) ([5fc356f](https://github.com/n8n-io/n8n/commit/5fc356f6e7ed36ba8aa1da2e2d04cb3fe1701134))
* **Email Trigger (IMAP) Node:** Option to disable last message id tracking ([#17964](https://github.com/n8n-io/n8n/issues/17964)) ([25379fe](https://github.com/n8n-io/n8n/commit/25379fe5221ecf1772d093c8c76bdac680eb6e64))
* **Ollama Credentials:** Add optional API key support to Ollama credentials (Openwebui proxy) ([#17857](https://github.com/n8n-io/n8n/issues/17857)) ([acfb79b](https://github.com/n8n-io/n8n/commit/acfb79bd970c5a84f38564cc069b32d87e2a4cd9))


### Performance Improvements

* **core:** Enable Sentry tracing ([#18192](https://github.com/n8n-io/n8n/issues/18192)) ([80e9e6f](https://github.com/n8n-io/n8n/commit/80e9e6fc330cf8f6c6e22aeff964733dd3bff183))



# [1.106.0](https://github.com/n8n-io/n8n/compare/n8n@1.105.0...n8n@1.106.0) (2025-08-04)


### Bug Fixes

* **core:** Assign `execute` method to declarative nodes even if they have `methods` property ([#17796](https://github.com/n8n-io/n8n/issues/17796)) ([3f1016f](https://github.com/n8n-io/n8n/commit/3f1016f1adc90ce2e7f6905ab247098877f8d258))
* **core:** Check that src folder exists an fallback to dist when loading modules ([#17754](https://github.com/n8n-io/n8n/issues/17754)) ([6c0be29](https://github.com/n8n-io/n8n/commit/6c0be292b16ab08c92deef037a2659a3d27b8e01))
* **core:** Handle symlinks in blocked paths ([#17735](https://github.com/n8n-io/n8n/issues/17735)) ([c2c3e08](https://github.com/n8n-io/n8n/commit/c2c3e08cdf33570d9051e659812cbfbdd3c077fd))
* **core:** Replace misleading "No path back to node" error with helpful execution message ([#17759](https://github.com/n8n-io/n8n/issues/17759)) ([164800f](https://github.com/n8n-io/n8n/commit/164800f6a40b1f8c36592c5367c48c3f5ef1a451))
* **editor:** Account for subpath when serving `config.js` ([#17832](https://github.com/n8n-io/n8n/issues/17832)) ([b745cad](https://github.com/n8n-io/n8n/commit/b745cad72c6fcad23894150bf7edad0b568787b7))
* **editor:** Change the checkbox logic for log streaming event selection ([#17653](https://github.com/n8n-io/n8n/issues/17653)) ([43f2675](https://github.com/n8n-io/n8n/commit/43f267535d106db4c2a9d9caddb414329129b140))
* **editor:** Fix canvas moving check ([#17856](https://github.com/n8n-io/n8n/issues/17856)) ([ddc4c0b](https://github.com/n8n-io/n8n/commit/ddc4c0b7d99834db62ba935cda4c29cfc5197934))
* **editor:** Fix invisible node creator icons ([#17870](https://github.com/n8n-io/n8n/issues/17870)) ([a83b76c](https://github.com/n8n-io/n8n/commit/a83b76cc23f59a78d768473339e40a6c907a88eb))
* **editor:** Store last entered cURL command for each HTTP node ([#17834](https://github.com/n8n-io/n8n/issues/17834)) ([e8e7b23](https://github.com/n8n-io/n8n/commit/e8e7b23d47ca3fa7fb40e951763b7ad871110fc7))
* Fix issue with icon themes not loading for preview nodes ([#17869](https://github.com/n8n-io/n8n/issues/17869)) ([6d1f2cb](https://github.com/n8n-io/n8n/commit/6d1f2cb67e416a14dc839308950dac4d1e51733c))
* Fix issue with some community nodes not displaying correctly ([#17866](https://github.com/n8n-io/n8n/issues/17866)) ([f150343](https://github.com/n8n-io/n8n/commit/f150343141d53449f5a41bedc85ca9bd52cf1b1e))
* **Gmail Trigger Node:** Filter sent emails from trigger results ([#17691](https://github.com/n8n-io/n8n/issues/17691)) ([4bab296](https://github.com/n8n-io/n8n/commit/4bab2960750bbf91f27171b53e8a206dc247e7fa))
* **Google Gemini Node:** Don't pass hardcoded value for durationSeconds when generating a video ([#17793](https://github.com/n8n-io/n8n/issues/17793)) ([460e3b1](https://github.com/n8n-io/n8n/commit/460e3b1dfdb64bf4501dcf9ff1a480da34c64b6a))
* **Google Sheets Node:** Make it possible to set cell values empty on updates ([#17224](https://github.com/n8n-io/n8n/issues/17224)) ([d924d82](https://github.com/n8n-io/n8n/commit/d924d82ee2862f398f66eb624815694893527d48))
* Hide settings hint from log view ([#17813](https://github.com/n8n-io/n8n/issues/17813)) ([a46fa60](https://github.com/n8n-io/n8n/commit/a46fa6072e4d5bd02611625c60fe6fff7d31c731))
* **Microsoft Teams Trigger Node:** Forbidden when trying to listen for channel messages ([#17777](https://github.com/n8n-io/n8n/issues/17777)) ([bc97584](https://github.com/n8n-io/n8n/commit/bc97584c0c6e58878dd0e9708062813c099687a2))
* **Stop and Error Node:** Show error message when error type is an object ([#17898](https://github.com/n8n-io/n8n/issues/17898)) ([aced4bf](https://github.com/n8n-io/n8n/commit/aced4bf86f343f768ddb81485c24e69d5cf12530))
* **Structured Output Parser Node:** Handle passed objects that do not match schema ([#17774](https://github.com/n8n-io/n8n/issues/17774)) ([1fb78cb](https://github.com/n8n-io/n8n/commit/1fb78cb0eabfaedad16568e21254c42dae6cebee))


### Features

* Abort AI builder requests on chat stop ([#17854](https://github.com/n8n-io/n8n/issues/17854)) ([ce98f7c](https://github.com/n8n-io/n8n/commit/ce98f7c175d1875e84bcfa0681bda6035e386dc6))
* Add @n8n/node-cli package with an empty create command ([#17620](https://github.com/n8n-io/n8n/issues/17620)) ([79c6b60](https://github.com/n8n-io/n8n/commit/79c6b60fcb5ea9a3e22a8aa0fa516f270239df69))
* **AWS Bedrock Chat Model Node:** Add inference profile support ([#17807](https://github.com/n8n-io/n8n/issues/17807)) ([80513ae](https://github.com/n8n-io/n8n/commit/80513ae66b95b768b30b8e3e3502f45867128db4))
* **Beeminder Node:** Update Beeminder node to include all resources and operations ([#17713](https://github.com/n8n-io/n8n/issues/17713)) ([b491ed9](https://github.com/n8n-io/n8n/commit/b491ed99cea87ea0f3e5ea90baf85c388fa65cb4))
* **ClickUp Node:** Add subtasks and markdown support to the get task operation ([#16811](https://github.com/n8n-io/n8n/issues/16811)) ([a5184e4](https://github.com/n8n-io/n8n/commit/a5184e4895d47f9b079ff7948cdd158a06d34aba))
* **core:** Use hostname in host ID for Docker ([#16544](https://github.com/n8n-io/n8n/issues/16544)) ([308a6f6](https://github.com/n8n-io/n8n/commit/308a6f65dde20765bb27e21fceac4a5ca887bdc0))
* **editor:** Add front-end for Data Store feature ([#17590](https://github.com/n8n-io/n8n/issues/17590)) ([b89c254](https://github.com/n8n-io/n8n/commit/b89c25439485576cbd7f1f3eabe5af825aa47311))
* Env to disable webhook response iframe sandboxing ([#17851](https://github.com/n8n-io/n8n/issues/17851)) ([1ed8239](https://github.com/n8n-io/n8n/commit/1ed8239625eb85af4138b5431bc77038fda2e513))
* **FTP Node:** Add support for concurrent reads when using SFTP ([#17896](https://github.com/n8n-io/n8n/issues/17896)) ([e437dac](https://github.com/n8n-io/n8n/commit/e437dace7069744c26eb1cce368f07d31f363ab5))
* **Google BigQuery Node:** Add parameterized query support ([#14302](https://github.com/n8n-io/n8n/issues/14302)) ([096e535](https://github.com/n8n-io/n8n/commit/096e535f1ededcf6d21b42c10fee68d142a7da7c))
* **MongoDB Node:** Add search index CRUD API to MongoDB CRUD Node  ([#16490](https://github.com/n8n-io/n8n/issues/16490)) ([1554e76](https://github.com/n8n-io/n8n/commit/1554e76500470613ddb310424f693c07fe0887cd))
* **n8n Form Trigger Node:** Add CSS variable to customize input background ([#15460](https://github.com/n8n-io/n8n/issues/15460)) ([22f505d](https://github.com/n8n-io/n8n/commit/22f505de691b926f9e56122bbd07c63128e5703e))
* **Slack Trigger Node:** Add support for signature verification ([#17838](https://github.com/n8n-io/n8n/issues/17838)) ([1330581](https://github.com/n8n-io/n8n/commit/133058183e90570f8272075a10d9257d05728085))
* Table in confirm modal to see all workflows using nodes before updating / uninstalling ([#17488](https://github.com/n8n-io/n8n/issues/17488)) ([76230d2](https://github.com/n8n-io/n8n/commit/76230d2640f04da8a2a3c78dbdf5003b0ebd1771))
* **Vercel AI Gateway Node:** Add Vercel AI Gateway model Node ([#17524](https://github.com/n8n-io/n8n/issues/17524)) ([e97cd8a](https://github.com/n8n-io/n8n/commit/e97cd8afa18bbf67dc296c79cd1057e5bab083ab))
* **Webhook Node:** Add notices about using the 'Content-Type' header ([#17739](https://github.com/n8n-io/n8n/issues/17739)) ([1c5a27d](https://github.com/n8n-io/n8n/commit/1c5a27d3ee8216b6cb5e1894d38881b2de14c654))
* **Wordpress Node:** Add date fields ([#17755](https://github.com/n8n-io/n8n/issues/17755)) ([724b5a5](https://github.com/n8n-io/n8n/commit/724b5a51f2259de29dac3be0b51e9d80fd5244de))


### Performance Improvements

* **core:** Detect event loop blocking ([#17805](https://github.com/n8n-io/n8n/issues/17805)) ([b8b8507](https://github.com/n8n-io/n8n/commit/b8b8507ad69cea3ca706ef8230eaf99067e07014))
* **core:** Introduce decorator to report slow method calls ([#17729](https://github.com/n8n-io/n8n/issues/17729)) ([056302e](https://github.com/n8n-io/n8n/commit/056302ebe548862bf7550ed0aaf63cac61df0c9b))
* **core:** Stop typechecking during build ([#17833](https://github.com/n8n-io/n8n/issues/17833)) ([08a7b36](https://github.com/n8n-io/n8n/commit/08a7b365b8d34fd3dcc4deb878afb8e35c14bb0c))



# [1.105.0](https://github.com/n8n-io/n8n/compare/n8n@1.104.0...n8n@1.105.0) (2025-07-28)


### Bug Fixes

* **core:** Add headers to telemetry cross origin request ([#17631](https://github.com/n8n-io/n8n/issues/17631)) ([251e892](https://github.com/n8n-io/n8n/commit/251e892a09b82b2f1f980d3984e3aef84ed1732e))
* **core:** Decouple removing and closing destination from actually deleting it ([#17614](https://github.com/n8n-io/n8n/issues/17614)) ([b09f737](https://github.com/n8n-io/n8n/commit/b09f73701d8b6ce0e3bc4ef28d0f5d9fc7fb5df1))
* **core:** Fetching schema files in Docker ([#17623](https://github.com/n8n-io/n8n/issues/17623)) ([5a3b0a2](https://github.com/n8n-io/n8n/commit/5a3b0a24811eea5ebd9d80c26a54fea74665569f))
* **core:** Fix getLiveExecutionRowsOnPostgres when there are multiple n8n schemas ([#17635](https://github.com/n8n-io/n8n/issues/17635)) ([9e3bfff](https://github.com/n8n-io/n8n/commit/9e3bfff68d35a2eb21ba43452fc01ee24601c122))
* **core:** Ignore pairedItem when checking for incorrect output data from a node ([#17340](https://github.com/n8n-io/n8n/issues/17340)) ([2708fe8](https://github.com/n8n-io/n8n/commit/2708fe81a5323687c59c3d483d6bf3c67464f657))
* **core:** Make the module loading for local dev more generic ([#17547](https://github.com/n8n-io/n8n/issues/17547)) ([01b95a9](https://github.com/n8n-io/n8n/commit/01b95a9ee5dd4985e4770ef625ced91158f849da))
* **core:** Optimize connection type lookups ([#17585](https://github.com/n8n-io/n8n/issues/17585)) ([70eab1b](https://github.com/n8n-io/n8n/commit/70eab1b2a02d70a46a56e8c993ccc694e38ac2d5))
* **core:** Remove non-included nodes regardless of the package when using NODES_INCLUDE ([#17517](https://github.com/n8n-io/n8n/issues/17517)) ([1641d39](https://github.com/n8n-io/n8n/commit/1641d3964b72539354a939400af91e2692368058))
* Do not throw on tool errors, instead return error message ([#17558](https://github.com/n8n-io/n8n/issues/17558)) ([f11ec53](https://github.com/n8n-io/n8n/commit/f11ec538dca2938e57302a1bedd5dd7d1e7a9488))
* **editor:** Add background same as that of the parent ([#17625](https://github.com/n8n-io/n8n/issues/17625)) ([8660057](https://github.com/n8n-io/n8n/commit/8660057350e21b604b3fb3f627ccd32659058e87))
* **editor:** Case-sensitive credential search in `NodeCredentials` component ([#17564](https://github.com/n8n-io/n8n/issues/17564)) ([3ce9a99](https://github.com/n8n-io/n8n/commit/3ce9a998ae454929207dd9add4a67b68dba13bc8))
* **editor:** Do not show new NDV for sticky notes ([#17537](https://github.com/n8n-io/n8n/issues/17537)) ([4de3759](https://github.com/n8n-io/n8n/commit/4de3759a59cade3f82c57a1eeba1c6b4a16a3eaf))
* **editor:** Fix canvas layouting when tab is not active ([#17638](https://github.com/n8n-io/n8n/issues/17638)) ([2df76e0](https://github.com/n8n-io/n8n/commit/2df76e020ef3a962fc991f2d108a8181914a2dd1))
* **editor:** Fix error when there is no path back to referenced node ([#16059](https://github.com/n8n-io/n8n/issues/16059)) ([d6ac924](https://github.com/n8n-io/n8n/commit/d6ac924b3b7d2205cbcc0e5edc7ad407f4fe2a19))
* **editor:** Fix layout of binary data preview in the log view ([#17584](https://github.com/n8n-io/n8n/issues/17584)) ([456c4e8](https://github.com/n8n-io/n8n/commit/456c4e8167ed95e5f096daaae9cc46cad90a0981))
* **editor:** Fix trimPayloadToSize mutating original objects in AI assistant ([#17498](https://github.com/n8n-io/n8n/issues/17498)) ([1010043](https://github.com/n8n-io/n8n/commit/101004390bf5cdf5f67675dcfccb551f71ea4b70))
* **editor:** Hide `What's New` notification in executions demo view ([#17742](https://github.com/n8n-io/n8n/issues/17742)) ([cebb1f6](https://github.com/n8n-io/n8n/commit/cebb1f65669638a6716dbbd2eb9873ae8dbfe108))
* **editor:** Improve filter change handling with debounced updates for date fields ([#17618](https://github.com/n8n-io/n8n/issues/17618)) ([ae08917](https://github.com/n8n-io/n8n/commit/ae089173a71b3417ca07ae4bf49d4b0b3d31bf09))
* **editor:** Make inline text edit component reactive to prop changes ([#17557](https://github.com/n8n-io/n8n/issues/17557)) ([9c793a4](https://github.com/n8n-io/n8n/commit/9c793a45c562631ec331f65ca871334f5a8a8e2f))
* **editor:** Make sure HTML editor field is not editable when workflow is in read only mode ([#17561](https://github.com/n8n-io/n8n/issues/17561)) ([18c02df](https://github.com/n8n-io/n8n/commit/18c02dfa2b5cf76663b4678046a8bcb313fba1f4))
* **editor:** Persist SSO protocol setting properly in the UI ([#17572](https://github.com/n8n-io/n8n/issues/17572)) ([4b2be26](https://github.com/n8n-io/n8n/commit/4b2be263790a53bf46b99f3301ddec6a771b2daf))
* **editor:** Prevent default action on Enter key in commit and push dialog ([#17578](https://github.com/n8n-io/n8n/issues/17578)) ([e317c92](https://github.com/n8n-io/n8n/commit/e317c929161733a03ff61c07ae6f3ae12cf22ef2))
* **editor:** Prevent unnecessary updates on model value change in InlineTextEdit component ([#17553](https://github.com/n8n-io/n8n/issues/17553)) ([832b7fd](https://github.com/n8n-io/n8n/commit/832b7fda3b59cc518624128ca98d26983cb444fd))
* **editor:** Remove inline script and style from index.html ([#17531](https://github.com/n8n-io/n8n/issues/17531)) ([0db24ce](https://github.com/n8n-io/n8n/commit/0db24ce71b671f6311fc47ac9553466d34c46ba8))
* **editor:** Render HTML in the log view ([#17586](https://github.com/n8n-io/n8n/issues/17586)) ([46635c5](https://github.com/n8n-io/n8n/commit/46635c59418630c2f24fce5cb8c25e425eddc3c2))
* **editor:** Tweak configurable node width ([#17512](https://github.com/n8n-io/n8n/issues/17512)) ([3825f8a](https://github.com/n8n-io/n8n/commit/3825f8a806fcc67a33f43ce6ebd71b6a8023d7d8))
* **GitHub Document Loader Node:** Fix node loading issue ([#17494](https://github.com/n8n-io/n8n/issues/17494)) ([8fb3d8d](https://github.com/n8n-io/n8n/commit/8fb3d8d5870682af4b8b0c31949b5c1569a70d90))
* **Google Gemini Node:** Error when used as tool with "Message a model" operation ([#17491](https://github.com/n8n-io/n8n/issues/17491)) ([f30cc7b](https://github.com/n8n-io/n8n/commit/f30cc7b6cfba6998091f31fcd3012a971b3a2bb8))
* **Google Sheets Node:** Get Rows operation returns an empty string when the cell has a value of 0 ([#17642](https://github.com/n8n-io/n8n/issues/17642)) ([9808783](https://github.com/n8n-io/n8n/commit/980878398e9f6b498ba7079492e92bdba6fa6778))
* **MySQL Node:** Do not replace $ values with null ([#17327](https://github.com/n8n-io/n8n/issues/17327)) ([4b626e5](https://github.com/n8n-io/n8n/commit/4b626e528219c0610528a1119a2bb60c8442952d))
* **OpenAI Node:** Fix memory connector for assistant message ([#17501](https://github.com/n8n-io/n8n/issues/17501)) ([e51b056](https://github.com/n8n-io/n8n/commit/e51b056e3a8fd79c73b0a87eaf6595b7f03d546b))
* Prevent error when importing nodes with malformed collection params ([#17580](https://github.com/n8n-io/n8n/issues/17580)) ([4713827](https://github.com/n8n-io/n8n/commit/4713827813809065c8800adc7c0cd4bf42f54eeb))
* **RabbitMQ Trigger Node:** Respect the "Delete From Queue When" option with manual executions ([#17554](https://github.com/n8n-io/n8n/issues/17554)) ([2bd0aa3](https://github.com/n8n-io/n8n/commit/2bd0aa38e24dcada0777921d457586d35095ac42))
* **Telegram Node:** Determine the MIME type when downloading the file ([#17725](https://github.com/n8n-io/n8n/issues/17725)) ([a9c29e3](https://github.com/n8n-io/n8n/commit/a9c29e340adf370a65222600f3fac6884642c747))
* Update packages for security fixes ([#17733](https://github.com/n8n-io/n8n/issues/17733)) ([edeb8ef](https://github.com/n8n-io/n8n/commit/edeb8ef8a437f30a6c37826ad1eccb6a35a4d3bc))
* Update settings icons on canvas style ([#17636](https://github.com/n8n-io/n8n/issues/17636)) ([0338ebb](https://github.com/n8n-io/n8n/commit/0338ebb3dde3be4050ee869fb056f67827a764b2))
* **Webhook Node:** Don't wrap response in an iframe if it doesn't have HTML ([#17671](https://github.com/n8n-io/n8n/issues/17671)) ([69beafb](https://github.com/n8n-io/n8n/commit/69beafbf7127d6492fc875ab243e6f2e174e61ec))


### Features

* **core:** Increase Cron observability ([#17626](https://github.com/n8n-io/n8n/issues/17626)) ([08c38a7](https://github.com/n8n-io/n8n/commit/08c38a76f384642c09fab6fc47f76bffd532a5b8))
* **editor:** Add dragging and hiding for evaluation table columns ([#17587](https://github.com/n8n-io/n8n/issues/17587)) ([921cdb6](https://github.com/n8n-io/n8n/commit/921cdb6fd0ff11793a2ec08faee28b1c5842e25b))
* **editor:** Add follow up question nps ([#17459](https://github.com/n8n-io/n8n/issues/17459)) ([e18ffe8](https://github.com/n8n-io/n8n/commit/e18ffe809c044f2e10564669d96cf79779a8a279))
* **editor:** Add settings icons to the node on canvas ([#15467](https://github.com/n8n-io/n8n/issues/15467)) ([a2f21a7](https://github.com/n8n-io/n8n/commit/a2f21a76159e40de97c84c7604d3039d7e9a522e))
* **editor:** New users see whatsnew notification only if new ([#17409](https://github.com/n8n-io/n8n/issues/17409)) ([a1d2a55](https://github.com/n8n-io/n8n/commit/a1d2a55f7e6e04389cd8b86aacb9c78f2bffdc41))
* **editor:** Release the Focus Panel ([#17734](https://github.com/n8n-io/n8n/issues/17734)) ([a415dbf](https://github.com/n8n-io/n8n/commit/a415dbfd96c429f34e5de0a3572c7338d31321af))
* **editor:** Use remote filtering for error workflow search in settings ([#17624](https://github.com/n8n-io/n8n/issues/17624)) ([e1ef35a](https://github.com/n8n-io/n8n/commit/e1ef35a2b4a44c1ff9770b387fec9b5a3a742838))
* Proxy all RudderStack frontend telemetry events through the backend ([#17177](https://github.com/n8n-io/n8n/issues/17177)) ([5524b21](https://github.com/n8n-io/n8n/commit/5524b2137a0b54132df7dad1600c2e3054ed78c8))
* Respond to chat and wait for response ([#12546](https://github.com/n8n-io/n8n/issues/12546)) ([a98ed2c](https://github.com/n8n-io/n8n/commit/a98ed2ca495d5c86ebb61baad049592ba1bce3a6))
* **RSS Read Node:** Add support for custom response fields ([#16875](https://github.com/n8n-io/n8n/issues/16875)) ([d520059](https://github.com/n8n-io/n8n/commit/d520059ec36a9f0a578a60ddd8ea9811e76afd1f))
* Track inputs and outputs in Evaluations ([#17404](https://github.com/n8n-io/n8n/issues/17404)) ([c18fabb](https://github.com/n8n-io/n8n/commit/c18fabb419889d35bf70326f83e26300eaba0102))



# [1.104.0](https://github.com/n8n-io/n8n/compare/n8n@1.103.0...n8n@1.104.0) (2025-07-21)


### Bug Fixes

* **API:** Check if version exists in registry for community node installation ([#17168](https://github.com/n8n-io/n8n/issues/17168)) ([5180869](https://github.com/n8n-io/n8n/commit/518086973402d286363dd755f287d730b797e56c))
* **AWS Bedrock Chat Model Node:** Do not show issues for arbitrary model names ([#17079](https://github.com/n8n-io/n8n/issues/17079)) ([5bb5a65](https://github.com/n8n-io/n8n/commit/5bb5a65edf39c524b6ea11d54c308dd1034d87bd))
* **core:** Allow undefined workflow owner on source control for retro compatibility ([#17419](https://github.com/n8n-io/n8n/issues/17419)) ([78cb5b6](https://github.com/n8n-io/n8n/commit/78cb5b64093ad0c8830eddd7f862a14783b70a9c))
* **core:** Fix object store support for non-latin chars ([#17383](https://github.com/n8n-io/n8n/issues/17383)) ([550339e](https://github.com/n8n-io/n8n/commit/550339ed185cf599cb4571f473c06943b2cb0045))
* **core:** Remove inline JS from FE for more secure CSP ([#17195](https://github.com/n8n-io/n8n/issues/17195)) ([fc3129e](https://github.com/n8n-io/n8n/commit/fc3129e378b07d3e24c5b4ce24d013c0571c1089))
* **editor:** Make close button visible on become creator CTA ([#17405](https://github.com/n8n-io/n8n/issues/17405)) ([8a27563](https://github.com/n8n-io/n8n/commit/8a2756368beb4660f443010e75be95a297b63b0e))
* **editor:** Make tag search in workflows case insensitive ([#17347](https://github.com/n8n-io/n8n/issues/17347)) ([4073ce7](https://github.com/n8n-io/n8n/commit/4073ce7fb0cfcd7f0af97849edeeb0ff485c6639))
* **editor:** Prevent submit when composing with IME on chat textarea ([#17179](https://github.com/n8n-io/n8n/issues/17179)) ([5db8bbd](https://github.com/n8n-io/n8n/commit/5db8bbd126cbc30947c0b50afdc06bee31b7d449))
* **editor:** Recenter fromAI override close button ([#17455](https://github.com/n8n-io/n8n/issues/17455)) ([5cf74be](https://github.com/n8n-io/n8n/commit/5cf74beec19bfd175855cfdbe77c382ec6e58461))
* **editor:** Show additional data on Users list page ([#17339](https://github.com/n8n-io/n8n/issues/17339)) ([f3f4461](https://github.com/n8n-io/n8n/commit/f3f4461ac5f215f0f086f6c223ac7f5a0ed87625))
* **editor:** Update frontend to handle unlicensed insights dashboard, if only Time saved feature is enabled ([#17199](https://github.com/n8n-io/n8n/issues/17199)) ([42c6190](https://github.com/n8n-io/n8n/commit/42c61909c47f571951414b112bf5fdbba2bf3968))
* **Embeddings OpenAI Node:** Disable model list filter when custom baseURL is set ([#17296](https://github.com/n8n-io/n8n/issues/17296)) ([c159e2b](https://github.com/n8n-io/n8n/commit/c159e2be5c02086d6da796c61a8f6f58971a5a03))
* Fix issue with restricted file access order ([#17329](https://github.com/n8n-io/n8n/issues/17329)) ([e1805fb](https://github.com/n8n-io/n8n/commit/e1805fb14f931ba031ebb257922b34302bc6a617))
* Fix ordering issue when checking if staging environment ([#17385](https://github.com/n8n-io/n8n/issues/17385)) ([b8e2187](https://github.com/n8n-io/n8n/commit/b8e21876d1485c54dc53a490afb3ec77986d2c96))
* **OpenAi Node:** optional chaining for error handling in router ([#17412](https://github.com/n8n-io/n8n/issues/17412)) ([ba9eaca](https://github.com/n8n-io/n8n/commit/ba9eacaa6eb156fe3c3658eaf604f0d05fe3980f))
* **Think Tool Node:** Use dynamic tool name based on node name ([#17364](https://github.com/n8n-io/n8n/issues/17364)) ([ac552e6](https://github.com/n8n-io/n8n/commit/ac552e68fd8c7ff0ee137d4b03c4827496e9187b))


### Features

* Add endpoint to retrieve single workflow from GH ([#17220](https://github.com/n8n-io/n8n/issues/17220)) ([c4ba31e](https://github.com/n8n-io/n8n/commit/c4ba31ef620ee1aa3ceffae5e1fa2c065fb0cddd))
* **Anthropic Node:** New node ([#17121](https://github.com/n8n-io/n8n/issues/17121)) ([5502361](https://github.com/n8n-io/n8n/commit/5502361a97ec2fcb35e1b3f4cb2bca486fc69179))
* Community nodes details footer update ([#17158](https://github.com/n8n-io/n8n/issues/17158)) ([81cd490](https://github.com/n8n-io/n8n/commit/81cd49014a57cea05b3d15f61d7850854041458d))
* **core:** Add telemetry for agent tool on Cloud ([#17323](https://github.com/n8n-io/n8n/issues/17323)) ([4f45ec7](https://github.com/n8n-io/n8n/commit/4f45ec70c07bc82c29bbda730401b3c737073b27))
* **core:** Set up backend modules ([#17448](https://github.com/n8n-io/n8n/issues/17448)) ([1159345](https://github.com/n8n-io/n8n/commit/115934573fcd3318333e988e22563d3bfb9473f5))
* **editor:** Add "Stop Test" button to stop running evaluations ([#17328](https://github.com/n8n-io/n8n/issues/17328)) ([df80673](https://github.com/n8n-io/n8n/commit/df80673c96c8ebec0a9020822b8cfc8cf03be277))
* **editor:** Add option to disable credentials check in RLC ([#17381](https://github.com/n8n-io/n8n/issues/17381)) ([d466d9d](https://github.com/n8n-io/n8n/commit/d466d9d373bd7d58031dca87ba48d5dd5247f0d0))
* **editor:** Using special env vars as feature flags in the frontend ([#17355](https://github.com/n8n-io/n8n/issues/17355)) ([d36abb5](https://github.com/n8n-io/n8n/commit/d36abb5a3ad6c1c698e94316914f08aac512b2fc))
* **Facebook Graph API Node:** Add support for api v23 ([#17240](https://github.com/n8n-io/n8n/issues/17240)) ([c0f1867](https://github.com/n8n-io/n8n/commit/c0f1867429a64a3a27ae585084270d220972e673))
* **MCP Client Tool Node:** Add support for HTTP Streamable Transport ([#15454](https://github.com/n8n-io/n8n/issues/15454)) ([a5d14a2](https://github.com/n8n-io/n8n/commit/a5d14a25091284b0e0f4e82ae6c230ffa9782e41))
* **n8n Form Node:** Allow basic styling of form completion message ([#17338](https://github.com/n8n-io/n8n/issues/17338)) ([2d4abf1](https://github.com/n8n-io/n8n/commit/2d4abf156c354613173e1c56241d63c86d7ab9e1))
* NDV notify if community node has update ([#17146](https://github.com/n8n-io/n8n/issues/17146)) ([0237d8b](https://github.com/n8n-io/n8n/commit/0237d8b8ec097ee744b869a70870ffeb4bb83853))
* New package version available callout ([#17097](https://github.com/n8n-io/n8n/issues/17097)) ([49c84c2](https://github.com/n8n-io/n8n/commit/49c84c2ce29b9ff1c10b59565c28a65a767af6cb))



# [1.103.0](https://github.com/n8n-io/n8n/compare/n8n@1.102.0...n8n@1.103.0) (2025-07-14)


### Bug Fixes

* **AI Agent Node:** Prevent fallback input to be added in version <2.1 ([#17094](https://github.com/n8n-io/n8n/issues/17094)) ([1a4e4c5](https://github.com/n8n-io/n8n/commit/1a4e4c5e72d8d49ef8b72097cbc4764229e1d260))
* **core:** Allow insights breakdown by workflow to be sorted by workflow name ([#17184](https://github.com/n8n-io/n8n/issues/17184)) ([d002cc3](https://github.com/n8n-io/n8n/commit/d002cc3f7d241cec14c95a37e09a37b77b6759bf))
* **core:** Fix warning on empty OIDC discovery endpoint ([#17103](https://github.com/n8n-io/n8n/issues/17103)) ([608dcde](https://github.com/n8n-io/n8n/commit/608dcdee4de9d6744882830671a50c25a0b5139b))
* **core:** Improve handling of disabled Set Metrics node ([#17085](https://github.com/n8n-io/n8n/issues/17085)) ([57b914d](https://github.com/n8n-io/n8n/commit/57b914dcd9dc15a471d1873cbc114beeaaa9fca4))
* **core:** On OAuth access token update only update partial credential ([#17135](https://github.com/n8n-io/n8n/issues/17135)) ([c8b3ac6](https://github.com/n8n-io/n8n/commit/c8b3ac6ab0c6d6d915ae396da935c32844ea18d2))
* **editor:** Fit long words for draggable fields ([#17063](https://github.com/n8n-io/n8n/issues/17063)) ([b733573](https://github.com/n8n-io/n8n/commit/b73357369fe91a260f9215fac3c01c8d8e7162e3))
* **editor:** Fix RAG Callout keyboard navigation in nodes search ([#17099](https://github.com/n8n-io/n8n/issues/17099)) ([3610748](https://github.com/n8n-io/n8n/commit/3610748913b6c880936658037fb34f3f7b5ffd02))
* **editor:** Make search work for "rendered" display type ([#16910](https://github.com/n8n-io/n8n/issues/16910)) ([f252a39](https://github.com/n8n-io/n8n/commit/f252a39197b43cde047930584e8b1895722aeb42))
* **editor:** Mitigate performance issue in FE manual executions ([#17119](https://github.com/n8n-io/n8n/issues/17119)) ([3be5823](https://github.com/n8n-io/n8n/commit/3be5823b9770807713519a45f6dd4e61276e460f))
* **editor:** Open failed node in failed execution from sub-workflow node ([#17076](https://github.com/n8n-io/n8n/issues/17076)) ([8fff830](https://github.com/n8n-io/n8n/commit/8fff83032cb0a47a05460fcbbf8bd54bfd8956ce))
* **editor:** Remove feature flag from evals feature ([#17107](https://github.com/n8n-io/n8n/issues/17107)) ([59704b4](https://github.com/n8n-io/n8n/commit/59704b40101e7085193a9a5e4d8fc09cc01d53db))
* **editor:** Reset current page if out of bounds after page size change ([#17124](https://github.com/n8n-io/n8n/issues/17124)) ([b9e7b71](https://github.com/n8n-io/n8n/commit/b9e7b719c049bd1fa5793a1dcdfbccb467ede6a1))
* **Execute Sub-workflow Node:** Improve paired item handling for child workflows ([#17065](https://github.com/n8n-io/n8n/issues/17065)) ([f5fb33a](https://github.com/n8n-io/n8n/commit/f5fb33a3fac16b17b19552df07f0a8be54834f64))
* **GitHub Node:** Fix issue with user loading not completing ([#17122](https://github.com/n8n-io/n8n/issues/17122)) ([336d670](https://github.com/n8n-io/n8n/commit/336d6707e36a876e1a1a78c9874f8724c9046577))
* **Gmail Node:** Set References and In-Reply-To only when user provides threadId ([#16838](https://github.com/n8n-io/n8n/issues/16838)) ([7657cce](https://github.com/n8n-io/n8n/commit/7657cce5a4de92ecf9a0d58e9163c018e313d30e))
* **Linear Node:** Fix issue with priority being incorrect for issue updates ([#16764](https://github.com/n8n-io/n8n/issues/16764)) ([ced854d](https://github.com/n8n-io/n8n/commit/ced854df2ccfeb60d7f8c527f6086f81e89fe994))
* **n8n Form Node:** Make customizing form custom styles possible on mobile screens and on form end redirect ([#17060](https://github.com/n8n-io/n8n/issues/17060)) ([878026a](https://github.com/n8n-io/n8n/commit/878026aff686614ca3cb9c03c8947925076b6da9))
* **Perplexity Node:** Allow for penalties below 1 ([#17074](https://github.com/n8n-io/n8n/issues/17074)) ([62ea048](https://github.com/n8n-io/n8n/commit/62ea048bbfbf474239654cd87d8aba4c639051c6))
* **Sentiment Analysis Node:** Fix problems with first sentiment output ([#17233](https://github.com/n8n-io/n8n/issues/17233)) ([2f7ed14](https://github.com/n8n-io/n8n/commit/2f7ed14a239f82cbe47eaef83cd3ab506a7e30e0))
* **Token Splitter Node:** Cache tokenizer JSONs in memory ([#17201](https://github.com/n8n-io/n8n/issues/17201)) ([2402926](https://github.com/n8n-io/n8n/commit/2402926573f76699c0a81ba2f1c134b0f73d05cf))


### Features

* Add HTTP proxy support for OpenAI Embeddings node ([#17173](https://github.com/n8n-io/n8n/issues/17173)) ([232b8f6](https://github.com/n8n-io/n8n/commit/232b8f6cb19b905c6015673fbd2949f19d3e8cbe))
* **AI Agent Tool Node:** Add Agent Tool ([#17108](https://github.com/n8n-io/n8n/issues/17108)) ([f67581b](https://github.com/n8n-io/n8n/commit/f67581b74d99bf4831c83fa2fdfaff3de48996a0))
* **Cohere Chat Model Node:** Add Cohere Chat Model node  ([#16888](https://github.com/n8n-io/n8n/issues/16888)) ([c37397c](https://github.com/n8n-io/n8n/commit/c37397cb2b7fb8b14de613ca6fae24c8db7c380c))
* **core:** Add workflow name label to workflow metrics ([#16837](https://github.com/n8n-io/n8n/issues/16837)) ([0cc54ec](https://github.com/n8n-io/n8n/commit/0cc54ecf6d029d82e9668a56af87ec479af8df24))
* **editor:** Add new ways to discover templates ([#17183](https://github.com/n8n-io/n8n/issues/17183)) ([0259c58](https://github.com/n8n-io/n8n/commit/0259c58cb887661ec7646c5c25f489bed7372c86))
* **editor:** Move AI Assistant button to canvas action buttons ([#16879](https://github.com/n8n-io/n8n/issues/16879)) ([2294c3d](https://github.com/n8n-io/n8n/commit/2294c3d71b1871a5e0273f57449f740b1af5bb56))
* **editor:** Show the right editor in focus panel ([#17062](https://github.com/n8n-io/n8n/issues/17062)) ([3aeb622](https://github.com/n8n-io/n8n/commit/3aeb622978a41136c38ce00d4b38153f271efbe1))
* **Email Trigger (IMAP) Node:** Limit new mails fetched ([#16926](https://github.com/n8n-io/n8n/issues/16926)) ([d1ac292](https://github.com/n8n-io/n8n/commit/d1ac292709c198cea4a75560bd03b63b14ebab6b))
* **Google Gemini Node:** New node ([#16863](https://github.com/n8n-io/n8n/issues/16863)) ([0f59eea](https://github.com/n8n-io/n8n/commit/0f59eeaf5b824f4e5d6a66b6d3d199e0608af078))
* **n8n Evaluation Node:** Add pre-defined metrics to the "Set Metrics" operation ([#17127](https://github.com/n8n-io/n8n/issues/17127)) ([a34b30a](https://github.com/n8n-io/n8n/commit/a34b30acc78e1bf8c2f088635a8e34bd400371a9))
* Update Chat SDK to support streaming responses ([#17006](https://github.com/n8n-io/n8n/issues/17006)) ([3edadb5](https://github.com/n8n-io/n8n/commit/3edadb5a753ed6e07695399ae0a96391202b8818))


### Performance Improvements

* **core:** Improvements to GET `/workflows` endpoint ([#17086](https://github.com/n8n-io/n8n/issues/17086)) ([cc39c50](https://github.com/n8n-io/n8n/commit/cc39c50737b7ff2b04ca5e93a1c1bde6a42464bc))



# [1.102.0](https://github.com/n8n-io/n8n/compare/n8n@1.101.0...n8n@1.102.0) (2025-07-07)


### Bug Fixes

* Add install step for playwright binaries ([#16945](https://github.com/n8n-io/n8n/issues/16945)) ([05360ce](https://github.com/n8n-io/n8n/commit/05360cee79d5d84302c372323244286efc0c6281))
* **AI Agent Node:** Fix tool-usage with fallback mechanism ([#16898](https://github.com/n8n-io/n8n/issues/16898)) ([58fd1ec](https://github.com/n8n-io/n8n/commit/58fd1ec325996da87a7d41f2f56db3ce547619f6))
* Clean up `AI_CREDITS_EXPERIMENT` ([#16840](https://github.com/n8n-io/n8n/issues/16840)) ([d1d5412](https://github.com/n8n-io/n8n/commit/d1d5412bfb342870fd8c9ecada96fa33b4229525))
* Clean up `EASY_AI_WORKFLOW_EXPERIMENT` ([#16839](https://github.com/n8n-io/n8n/issues/16839)) ([3e04566](https://github.com/n8n-io/n8n/commit/3e04566845f308f194a04936229c003302b3b633))
* **Code Node:** Only Block os.system vs Blocking import os ([#16885](https://github.com/n8n-io/n8n/issues/16885)) ([e54613f](https://github.com/n8n-io/n8n/commit/e54613f75feacd0d40e35b4064b842e03eabd821))
* **core:** Apply same VM wrapper to both modes in task runner ([#16872](https://github.com/n8n-io/n8n/issues/16872)) ([af52a0d](https://github.com/n8n-io/n8n/commit/af52a0d1ed5bfe714825ce8de85e0f219ef17617))
* **core:** Block access to JS object constructor and `js` module in Pyodide ([#16957](https://github.com/n8n-io/n8n/issues/16957)) ([bde9008](https://github.com/n8n-io/n8n/commit/bde9008660a089f5976964b2af5f7634a9581448))
* **core:** Deduplicate credential types when lazyloading ([#16834](https://github.com/n8n-io/n8n/issues/16834)) ([625ae3f](https://github.com/n8n-io/n8n/commit/625ae3f584423915b36f90076798eb3fe12cc66f))
* **core:** Fix evaluation of `N8N_SKIP_AUTH_ON_OAUTH_CALLBACK` ([#16944](https://github.com/n8n-io/n8n/issues/16944)) ([945098d](https://github.com/n8n-io/n8n/commit/945098d78997b07b612739179985c8939fd4a89a))
* **core:** Fix partial execution in triggerless parent case ([#16833](https://github.com/n8n-io/n8n/issues/16833)) ([585295c](https://github.com/n8n-io/n8n/commit/585295c89f47f0c7a47ddff9af9b98aa1b436ad7))
* **core:** Fix worker view ([#17052](https://github.com/n8n-io/n8n/issues/17052)) ([f817fb4](https://github.com/n8n-io/n8n/commit/f817fb4e746cfda28c3eba9cb6c2ef6684f67d3f))
* **core:** Initialize source control unconditionally ([#16929](https://github.com/n8n-io/n8n/issues/16929)) ([faea69c](https://github.com/n8n-io/n8n/commit/faea69cbc2fe9517c0d0f79a72c44f8af36ef0a8))
* **core:** Prevent mutation of credential type parents ([#16841](https://github.com/n8n-io/n8n/issues/16841)) ([cb1103e](https://github.com/n8n-io/n8n/commit/cb1103e7421a1ccf4e3b03984c695bf64e1715ac))
* **core:** Remove unneeded cookies from webhook requests ([#16736](https://github.com/n8n-io/n8n/issues/16736)) ([830e068](https://github.com/n8n-io/n8n/commit/830e068509e1b798ebed0ee0f992e48568891da0))
* **editor:** AI Agent shows logs from multiple runs in same view ([#16825](https://github.com/n8n-io/n8n/issues/16825)) ([9133340](https://github.com/n8n-io/n8n/commit/913334005fe5b85f2b057056a740ba363a13b407))
* **editor:** Clear error states before copy to editor action ([#16922](https://github.com/n8n-io/n8n/issues/16922)) ([716cb9a](https://github.com/n8n-io/n8n/commit/716cb9aacaca171b7e1585b6f729e3a1b97e2df0))
* **editor:** Disable all potential eslint rule conflicts with prettier ([#16832](https://github.com/n8n-io/n8n/issues/16832)) ([9517d11](https://github.com/n8n-io/n8n/commit/9517d11a7e02a524727ced022e9ad1779409d74b))
* **editor:** Fix inifnite loading in Resource Locator Dropdown under certain conditions ([#16773](https://github.com/n8n-io/n8n/issues/16773)) ([8e62c80](https://github.com/n8n-io/n8n/commit/8e62c80d48bc33cb199881eea3850966eed3d535))
* **editor:** Fix mapping field icon sizes ([#16886](https://github.com/n8n-io/n8n/issues/16886)) ([346bc84](https://github.com/n8n-io/n8n/commit/346bc8409390aac3e8894fcaf97c7d19cf9ba117))
* **editor:** Fix table pagination state handling and adding more tests ([#16986](https://github.com/n8n-io/n8n/issues/16986)) ([34aae96](https://github.com/n8n-io/n8n/commit/34aae9665d588ea600d1f122916e1289711ea813))
* **editor:** Make JSON copy button work in PiP window ([#16887](https://github.com/n8n-io/n8n/issues/16887)) ([8fda3fb](https://github.com/n8n-io/n8n/commit/8fda3fb2aab1c5bb22f8c161667632743944bb47))
* **editor:** Make sure connectors are clickable when overlapped by node description ([#16765](https://github.com/n8n-io/n8n/issues/16765)) ([38c2e61](https://github.com/n8n-io/n8n/commit/38c2e6184c1bf425e9e12881fc9ef940b29414e8))
* **editor:** Only do new versions & what's new check after login ([#16844](https://github.com/n8n-io/n8n/issues/16844)) ([bbda2da](https://github.com/n8n-io/n8n/commit/bbda2dad635abb40861e9292465651f5c7c7e657))
* **editor:** Refetch module settings on manual license activation ([#16943](https://github.com/n8n-io/n8n/issues/16943)) ([5b9897c](https://github.com/n8n-io/n8n/commit/5b9897c3a299460e7c32a5c596b44e0bed2752ce))
* **editor:** Reset dirty state on workflow activation only if its current workflow ([#16997](https://github.com/n8n-io/n8n/issues/16997)) ([bb9679c](https://github.com/n8n-io/n8n/commit/bb9679c4fa2150f5df577a5e3c67766286fc7c9b))
* **editor:** Restore valid drag state when NDV is closed via ESC while dragging  ([#16758](https://github.com/n8n-io/n8n/issues/16758)) ([7cc5a05](https://github.com/n8n-io/n8n/commit/7cc5a05bd360cd770ff4af296604a4e316649fa1))
* **editor:** Show correct error messages on Ask AI ([#16913](https://github.com/n8n-io/n8n/issues/16913)) ([3a733b9](https://github.com/n8n-io/n8n/commit/3a733b91278f477a304e862c2b4e7eade6e75398))
* **editor:** Show escape characters in json view ([#16930](https://github.com/n8n-io/n8n/issues/16930)) ([bd8b7b4](https://github.com/n8n-io/n8n/commit/bd8b7b468c671ec3559a86e89e3cf1a587bf9133))
* **editor:** Show shared with me only on multi user instances ([#16770](https://github.com/n8n-io/n8n/issues/16770)) ([29bf4a4](https://github.com/n8n-io/n8n/commit/29bf4a46bd9197701f2ac49c0820b773d69cbbcf))
* **editor:** Support 'Save Workflow' key shortcut in new workflows ([#16756](https://github.com/n8n-io/n8n/issues/16756)) ([ffe8fbb](https://github.com/n8n-io/n8n/commit/ffe8fbbf73a5c708a5b8e9562e8d473d8ac8d166))
* **editor:** Sync log selection doesn't work for renamed nodes ([#16878](https://github.com/n8n-io/n8n/issues/16878)) ([ee463f0](https://github.com/n8n-io/n8n/commit/ee463f08b621a580aa9985c22ada49156a4104af))
* **editor:** Update bolt icon to filled ([#16954](https://github.com/n8n-io/n8n/issues/16954)) ([bf926ce](https://github.com/n8n-io/n8n/commit/bf926ce87e82d94039059dcfc96ed24e6b35e3e1))
* Evaluation nodes - add missing test function and credentialTest to methods ([#16734](https://github.com/n8n-io/n8n/issues/16734)) ([044022f](https://github.com/n8n-io/n8n/commit/044022f00404232051721eb741857bb7a50b8fdf))
* Fix `lintfix` command ([#17003](https://github.com/n8n-io/n8n/issues/17003)) ([5db122b](https://github.com/n8n-io/n8n/commit/5db122be0d7b24eedfb83f6c4531150c4d016296))
* **Google Sheets Node:** Include all headers ([#16928](https://github.com/n8n-io/n8n/issues/16928)) ([71771a7](https://github.com/n8n-io/n8n/commit/71771a76c4671495cf322d0421eeb57156238a5e))
* **HTTP Request Node:** Fix paginated requests with HttpBearerAuth ([#17005](https://github.com/n8n-io/n8n/issues/17005)) ([3b14830](https://github.com/n8n-io/n8n/commit/3b1483096625ead20803a320567f651df221137c))
* Prevent empty path in webhooks ([#16864](https://github.com/n8n-io/n8n/issues/16864)) ([bd69907](https://github.com/n8n-io/n8n/commit/bd699074775773bb4bcc81968d28ad6c51423861))
* Stop telemetry events to `Posthog` ([#16788](https://github.com/n8n-io/n8n/issues/16788)) ([d76f05b](https://github.com/n8n-io/n8n/commit/d76f05ba3d3b6fe4e8b301809b51f728334855d0))


### Features

* **Airtop Node:** Implement windows list API and other improvements  ([#16748](https://github.com/n8n-io/n8n/issues/16748)) ([621745e](https://github.com/n8n-io/n8n/commit/621745e2919b40db82bef39626febe1c0407c38d))
* **core:** Allow enforcement of MFA usage on instance ([#16556](https://github.com/n8n-io/n8n/issues/16556)) ([657e5a3](https://github.com/n8n-io/n8n/commit/657e5a3b3a5184b9f1f6b6303faabb9feef0d70a))
* **editor:** Allow users to update verified nodes from the node settings panel ([#16447](https://github.com/n8n-io/n8n/issues/16447)) ([6edd47d](https://github.com/n8n-io/n8n/commit/6edd47dd65aa488ad12a3dfe0c4605493da870d3))
* **editor:** Collapse button on table view ([#16993](https://github.com/n8n-io/n8n/issues/16993)) ([d3330b6](https://github.com/n8n-io/n8n/commit/d3330b6bccd2d019a62ca3005ed68b634ea65940))
* **editor:** Log view improvements ([#16489](https://github.com/n8n-io/n8n/issues/16489)) ([4124b96](https://github.com/n8n-io/n8n/commit/4124b96a00c0bf88094b0db948283e1f9fbb42dd))
* **editor:** NDV UI overhaul experiment ([#14209](https://github.com/n8n-io/n8n/issues/14209)) ([6ef3841](https://github.com/n8n-io/n8n/commit/6ef38411d88a94fa950afb85696cac3c8688891b))
* **editor:** Update grid size to `16px` for better alignment ([#16869](https://github.com/n8n-io/n8n/issues/16869)) ([7ebde66](https://github.com/n8n-io/n8n/commit/7ebde66eed9ad507aa494b9247134eebd2926829))
* **editor:** Update icons to Lucide icons ([#16231](https://github.com/n8n-io/n8n/issues/16231)) ([ed2cb3c](https://github.com/n8n-io/n8n/commit/ed2cb3c70198c8212d83606cb27de6cf6132526b))
* **LangChain Nodes:** Upgrade LangChain and improve proxy handling for LLM nodes ([#16778](https://github.com/n8n-io/n8n/issues/16778)) ([cfe3699](https://github.com/n8n-io/n8n/commit/cfe36997827467d6af7bf4d752dac6297902545d))
* **Mistral AI Node:** New node ([#16631](https://github.com/n8n-io/n8n/issues/16631)) ([c11e4bd](https://github.com/n8n-io/n8n/commit/c11e4bd0a8dc930d50a7f0e7ca64d25decd0d71c))
* **MySQL Node:** Hints for executeQuery and select operations ([#16753](https://github.com/n8n-io/n8n/issues/16753)) ([f2eb386](https://github.com/n8n-io/n8n/commit/f2eb38617fe4c0a70ca70b07ba65519120c09665))
* Weaviate Vector Store Node for Langchain ([#16856](https://github.com/n8n-io/n8n/issues/16856)) ([4813c01](https://github.com/n8n-io/n8n/commit/4813c011ecd5c81da48fbd609aa9f8134c81786a))


### Performance Improvements

* **core:** Eliminate unnecessary license server calls ([#17047](https://github.com/n8n-io/n8n/issues/17047)) ([6efff79](https://github.com/n8n-io/n8n/commit/6efff79d72a808ebd295ed38fa1624f898e599bb))



# [1.101.0](https://github.com/n8n-io/n8n/compare/n8n@1.100.0...n8n@1.101.0) (2025-06-30)


### Bug Fixes

* Adding this back as it's still needed for darwin builds locally ([#16720](https://github.com/n8n-io/n8n/issues/16720)) ([719a174](https://github.com/n8n-io/n8n/commit/719a17427e5ef525ff89497d5f8a120997cddd4e))
* Check for status when canceling execution ([#16690](https://github.com/n8n-io/n8n/issues/