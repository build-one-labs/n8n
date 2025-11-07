window.n8nExternalHooks = {
	credentialsEdit: {
		credentialTypeChanged: [
			function (store, meta) {
				window.parent.postMessage(
					{ type: 'credentialsEdit.credentialTypeChanged', data: meta },
					'*',
				);
			},
		],
	},
	credentials: {
		create: [
			function (store, meta) {
				window.parent.postMessage({ type: 'credentials.create', data: meta }, '*');
			},
		],
	},
	credentialsList: {
		dialogVisibleChanged: [
			function (store, meta) {
				window.parent.postMessage(
					{ type: 'credentialsList.dialogVisibleChanged', data: meta },
					'*',
				);
			},
		],
	},
	dataDisplay: {
		nodeTypeChanged: [
			function (store, meta) {
				window.parent.postMessage({ type: 'dataDisplay.nodeTypeChanged', data: meta }, '*');
			},
		],
		onDocumentationUrlClick: [
			function (store, meta) {
				window.parent.postMessage({ type: 'dataDisplay.onDocumentationUrlClick', data: meta }, '*');
			},
		],
	},
	execution: {
		open: [
			function (store, meta) {
				window.parent.postMessage({ type: 'execution.open', data: meta }, '*');
			},
		],
	},
	executionsList: {
		openDialog: [
			function (store, meta) {
				window.parent.postMessage({ type: 'executionsList.openDialog', data: meta }, '*');
			},
		],
	},
	expressionEdit: {
		itemSelected: [
			function (store, meta) {
				window.parent.postMessage({ type: 'expressionEdit.itemSelected', data: meta }, '*');
			},
		],
		dialogVisibleChanged: [
			function (store, meta) {
				window.parent.postMessage({ type: 'expressionEdit.dialogVisibleChanged', data: meta }, '*');
			},
		],
	},
	nodeCreateList: {
		filteredNodeTypesComputed: [
			function (store, meta) {
				window.parent.postMessage(
					{ type: 'nodeCreateList.filteredNodeTypesComputed', data: meta },
					'*',
				);
			},
		],
		nodeFilterChanged: [
			function (store, meta) {
				window.parent.postMessage({ type: 'nodeCreateList.nodeFilterChanged', data: meta }, '*');
			},
		],
		selectedTypeChanged: [
			function (store, meta) {
				window.parent.postMessage({ type: 'nodeCreateList.selectedTypeChanged', data: meta }, '*');
			},
		],
		mounted: [
			function (store, meta) {
				window.parent.postMessage({ type: 'nodeCreateList.mounted', data: meta }, '*');
			},
		],
		destroyed: [
			function (store, meta) {
				window.parent.postMessage({ type: 'nodeCreateList.destroyed', data: meta }, '*');
			},
		],
	},
	nodeSettings: {
		credentialSelected: [
			function (store, meta) {
				window.parent.postMessage({ type: 'nodeSettings.credentialSelected', data: meta }, '*');
			},
		],
		valueChanged: [
			function (store, meta) {
				window.parent.postMessage({ type: 'nodeSettings.valueChanged', data: meta }, '*');
			},
		],
	},
	nodeView: {
		createNodeActiveChanged: [
			function (store, meta) {
				window.parent.postMessage({ type: 'nodeView.createNodeActiveChanged', data: meta }, '*');
			},
		],
		addNodeButton: [
			function (store, meta) {
				window.parent.postMessage({ type: 'nodeView.addNodeButton', data: meta }, '*');
			},
		],
		createNodeActiveChanged: [
			function (store, meta) {
				window.parent.postMessage({ type: 'nodeView.createNodeActiveChanged', data: meta }, '*');
			},
		],
		mount: [
			function (store, meta) {
				window.parent.postMessage({ type: 'nodeView.mount', data: meta }, '*');
			},
		],
	},
	pushConnection: {
		executionFinished: [
			function (store, meta) {
				window.parent.postMessage({ type: 'pushConnection.executionFinished', data: meta }, '*');
			},
		],
	},
	showMessage: {
		showError: [
			function (store, meta) {
				window.parent.postMessage({ type: 'showMessage.showError', data: meta }, '*');
			},
		],
	},
	runData: {
		displayModeChanged: [
			function (store, meta) {
				window.parent.postMessage({ type: 'runData.displayModeChanged', data: meta }, '*');
			},
		],
	},
	workflow: {
		activeChange: [
			function (store, meta) {
				window.parent.postMessage({ type: 'workflow.activeChange', data: meta }, '*');
			},
		],
		activeChangeCurrent: [
			function (store, meta) {
				window.parent.postMessage({ type: 'workflow.activeChangeCurrent', data: meta }, '*');
			},
		],
		afterUpdate: [
			function (store, meta) {
				window.parent.postMessage({ type: 'workflow.afterUpdate', data: meta }, '*');
			},
		],
		open: [
			function (store, meta) {
				window.parent.postMessage({ type: 'workflow.open', data: meta }, '*');
			},
		],
		add: [
			function (store, meta) {
				window.parent.postMessage({ type: 'workflow.add', data: meta }, '*');
			},
		],
		duplicate: [
			function (store, meta) {
				window.parent.postMessage({ type: 'workflow.duplicate', data: meta }, '*');
			},
		],
		delete: [
			function (store, meta) {
				window.parent.postMessage({ type: 'workflow.delete', data: meta }, '*');
			},
		],
	},
	workflowRun: {
		runError: [
			function (store, meta) {
				window.parent.postMessage({ type: 'workflowRun.runError', data: meta }, '*');
			},
		],
		runWorkflow: [
			function (store, meta) {
				window.parent.postMessage({ type: 'workflowRun.runWorkflow', data: meta }, '*');
			},
		],
	},
	workflowSettings: {
		dialogVisibleChanged: [
			function (store, meta) {
				window.parent.postMessage(
					{ type: 'workflowSettings.dialogVisibleChanged', data: meta },
					'*',
				);
			},
		],
		saveSettings: [
			function (store, meta) {
				window.parent.postMessage({ type: 'workflowSettings.saveSettings', data: meta }, '*');
			},
		],
	},
	template: {
		open: [
			function (store, meta) {
				window.parent.postMessage({ type: 'template.open', data: meta }, '*');
			},
		],
	},
};
